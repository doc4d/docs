---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## Sommaire

La classe `OpenAIProviders` gère les configurations de fournisseurs d'IA en chargeant la configuration et en gérant la résolution des chaînes de modèles au format `provider:model`.

Pour une documentation complète sur son utilisation, voir [Alias de modèles de fournisseurs](../provider-model-aliases.md).

## Description

Cette classe permet la prise en charge de plusieurs fournisseurs via :

- le chargement des configurations de fournisseurs à partir d'un seul fichier JSON
- le chargement des alias de modèles nommés correspondant à des fournisseurs et à des identifiants de modèles
- la résolution de la syntaxe `provider:model` en configuration complète de l'API
- la résolution des alias de modèles nommés depuis un nom simple en nom du fournisseur complet + les configurations du modèle

La classe `OpenAI` charge automatiquement les configurations des fournisseurs lors de son instanciation.

## Constructeur

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

Crée une nouvelle instance qui charge la configuration du fournisseur à partir du fichier `AIProviders.json` (voir [**Fichiers de configuration**](../provider-model-aliases.md#configuration-files) dans la page "Alias de fournisseurs de modèles" pour plus de détails sur l'emplacement et le format des fichiers).

**Important:**

- Seul le premier fichier existant est chargé. Il n'y a pas de fusion de plusieurs fichiers.
- La configuration est lue une fois au moment de l'instanciation. Si le fichier `AIProviders.json` est modifié par la suite, ces changements ne seront pas reflétés dans l'instance existante. Vous devez créer une nouvelle instance de `OpenAIProviders` pour recharger la configuration mise à jour.

## Utilisation

### Intégration avec la classe OpenAI

```4d
var $client := cs.AIKit.OpenAI.new()

// Utilisation d'alias de modèles avec syntaxe provider:model
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})
```

### Accès direct aux fournisseurs

```4d
var $providers := cs.AIKit.OpenAIProviders.new()

// Obtenir une configuration de fournisseur spécifique
var $config := $providers.get("openai")
// Renvoie : {baseURL : "...", apiKey : "...", modelAliases : [...], ...} ou Null

// Obtenir tous les noms de fournisseurs
var $names := $providers.list()
// Renvoie : ["openai", "anthropic", "mistral", "local"]
```

## Fonctions

### get()

**get**(*name* : Text) : Object

Get a provider configuration by name.

| Paramètres | Type   | Description                                           |
| ---------- | ------ | ----------------------------------------------------- |
| *name*     | Text   | The provider name                                     |
| Résultat   | Object | Provider configuration object, or `Null` if not found |

#### Exemple

```4d
var $config := $providers.get("openai")
If ($config # Null)
    // Use $config.baseURL, $config.apiKey, etc.

    // We could build a client with it
    var $client:=cs.AIKit.OpenAI.new($config)
End if
```

### list()

**list**() : Collection

Get all provider names.

| Paramètres | Type       | Description                  |
| ---------- | ---------- | ---------------------------- |
| Résultat   | Collection | Collection of provider names |

#### Exemple

```4d
var $names := $providers.list()
// Returns: ["openai", "anthropic", ...]

For each ($name; $names)
    var $config := $providers.get($name)
End for each
```

### modelAliases()

**modelAliases**() : Collection

Get all configured model aliases.

| Paramètres | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| Résultat   | Collection | Collection of model alias objects |

Each object in the collection contains:

| Propriété  | Type | Description                       |
| ---------- | ---- | --------------------------------- |
| `name`     | Text | Model alias name                  |
| `provider` | Text | Provider name                     |
| `model`    | Text | Model ID to use with the provider |

#### Exemple

```4d
var $models := $providers.modelAliases()
// Returns: [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...]

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## Model Resolution

Two syntaxes are supported for model resolution:

### Alias de fournisseur (`provider:model`)

Specify the provider and model name directly:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
```

This is resolved internally to:

1. Split `"openai:gpt-5.1"` into provider=`"openai"` and model=`"gpt-5.1"`
2. Look up the `"openai"` provider configuration
3. Extract `baseURL` and `apiKey`
4. Make the API request using the resolved configuration

**Exemples :**

- `"openai:gpt-5.1"` → Use OpenAI provider with gpt-5.1 model
- `"anthropic:claude-3-opus"` → Use Anthropic provider with claude-3-opus
- `"local:llama3"` → Use local provider with llama3 model

### Alias de modèle (nom simple)

Use a named model by its bare name from the `models` section of the configuration:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: ":my-gpt"})
```

This is resolved internally to:

1. Look up `"my-gpt"` in the `models` configuration
2. Find its `provider` (e.g., `"openai"`) and `model` (e.g., `"gpt-5.1"`)
3. Resolve the provider to get `baseURL` and `apiKey`
4. Make the API request using the resolved configuration

**Exemples :**

- `"my-gpt"` → Use the model alias "my-gpt" (resolves to its configured provider and model)
- `"my-embedding"` → Use the model alias "my-embedding" for embedding operations


---
id: time
title: 時間
---

時間のフィールド・変数・式の範囲は 00:00:00 から 596,000:00:00 までです。

時間は 24時間制です。

時間の値は数値として扱うことができます。 時間から返される数値は、その時間が表す総秒数です。

**Note:** In the _4D Language Reference_ manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## 時間リテラル

時間リテラル定数は、疑問符 (? ... ?) で囲んで表します。

時間は、“時:分:秒” の順で表し、それぞれをコロン (:) で区切ります。 時間は24時間制で指定します。

時間定数の例を次に示します:

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

空の時間は、?00.00.00? のように指定します。

**Tip:** The Code Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter.

## 時間演算子

| 演算                          | シンタックス         | 戻り値     | 式                                                                                       | 値                                          |
| --------------------------- | -------------- | ------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| 加算 (足し算) | Time + Time    | 時間      | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| 減算 (引き算) | Time – Time    | 時間      | ?02:03:04? – ?01:02:03? | ?01:01:01? |
| 加算 (足し算) | Time + Number  | Number  | ?02:03:04? + 65                                         | 7449                                       |
| 減算 (引き算) | Time – Number  | Number  | ?02:03:04? – 65                                         | 7319                                       |
| 乗算 (かけ算) | Time \* Number | Number  | ?02:03:04? \* 2                                         | 14768                                      |
| 除算 (割り算) | Time / Number  | Number  | ?02:03:04? / 2                                          | 3692                                       |
| 倍長整数を返す除算                   | Time \ Number  | Number  | ?02:03:04? \ 2                                          | 3692                                       |
| モジューロ                       | Time % Time    | 時間      | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| モジューロ                       | Time % Number  | Number  | ?02:03:04? % 2                                          | 0                                          |
| 等しい                         | Time = Time    | Boolean | ?01:02:03? = ?01:02:03? | true                                       |

```
		||||?01:02:03? = ?01:02:04?	|False|
```

|Inequality	|Time # Time	|Boolean	|?01:02:03? # ?01:02:04?	|True|
||||?01:02:03? # ?01:02:03?	|False|
|Greater than	|Time > Time	|Boolean	|?01:02:04? > ?01:02:03?	|True|
||||		?01:02:03? > ?01:02:03?	|False|
|Less than	|Time < Time	|Boolean	|?01:02:03? < ?01:02:04?	|True|
||||	?01:02:03? < ?01:02:03?	|False|
|Greater than or equal to	|Time >= Time	|Boolean	|?01:02:03? >=?01:02:03?	|True|
||||?01:02:03? >=?01:02:04?	|False|
|Less than or equal to	|Time <= Time	|Boolean	|?01:02:03? <=?01:02:03?|	True|
||||?01:02:04? <=?01:02:03?	|False|

### 例題 1

To obtain a time expression from an expression that combines a time expression with a number, use the commands `Time` and `Time string`.

You can combine expressions of the time and number types using the `Time` or `Current time` functions:

```4d
	//The following line assigns to $vlSeconds the number of seconds   
	//that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
	//The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

2番目の行はより簡単に記述することができます:

```4d
  // 以下の行は $vHSoon に1時間後の時刻を代入します。
 $vhSoon:=Current time+?01:00:00?
```

### 例題 2

モジューロ演算子を使用できます。とくに24時間フォーマットを考慮した時間の追加に便利です:

```4d
$t1:=?23:00:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning
```

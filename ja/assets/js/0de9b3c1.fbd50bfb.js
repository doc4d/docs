"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["784701"],{588961(e,s,a){a.r(s),a.d(s,{default:()=>c});var n=a(474848);a(296540);var o=a(610898),m=JSON.parse('{"18":{"commands":{},"classes":{}},"19":{"commands":{},"classes":{}},"20":{"commands":{},"classes":{}},"21":{"commands":{},"classes":{}},"21R5":{"commands":{},"classes":{}},"21R4":{"commands":{},"classes":{}},"":{"commands":{},"classes":{}}}'),r=JSON.parse('["21-R5","21-R4","21","20","19","18"]');function c(){let e=(0,o.A)(),s=JSON.stringify(m),a=JSON.stringify(r),c=e.siteConfig.baseUrl;return(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:`
              ( function() {
              const commands = JSON.parse('${s}')
              const versions = JSON.parse('${a}')

              const url = new URL(window.location.href);
              const memberWanted = url.searchParams.get("member");
              const versionWanted = url.searchParams.get("v");
              let commandWanted = url.searchParams.get("command");
              if(commandWanted !== null) {
                commandWanted = commandWanted.replaceAll("%20", " ").toLowerCase();
              }

              let classWanted = url.searchParams.get("class");
              if(classWanted !== null) {
                classWanted = classWanted.replaceAll("%20", " ").toLowerCase();
              }

              let versionToGo = ""
              //Match version
              for (let i = 1; i < versions.length; i++) { // start at one to skip first version
                const version = versions[i].replace('-','');
                if(version === versionWanted) {
                  versionToGo = versions[i] + "/"
                }
              }

              let commandFile = ""

              let commandsVersion = commands[versionWanted];
              if(!commandsVersion) {
                commandsVersion = commands[""];
              }

              let valueWanted = ""
              if(commandsVersion !== undefined) {
                if(memberWanted)
                {
                  valueWanted = memberWanted
                  commandFile = commandsVersion["classes"][classWanted]
                }
                else
                {
                  valueWanted = commandWanted
                  commandFile = commandsVersion["commands"][commandWanted]
                }
              }

              const finalUrl = "${c}" + versionToGo + commandFile + "#" + valueWanted.toLowerCase().replaceAll(" ", "-");
              console.log(finalUrl)

              window.location.href = finalUrl
            })();
                `}})}}}]);
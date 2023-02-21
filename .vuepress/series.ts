
interface SericeItem{
    text: string;
    children: string[]
}
interface Serices {
    [k: string] : SericeItem[]
}

const series:Serices = {
    "/docs/souni/frame":[
      {
        text: "指南",
        children: ["index.html", "01.structure", "02.style","03.router","04.store","05.api"],
      },
    ],
    "/docs/souni/components":[
      {
        text: "组件",
        children: ["index.html", "btn","item","num","pop","popbox","reset","row","soCalendar","soCheckbox","soForm","soGrid","soRadio","soRegion","soSearch","soSelect","soSheet","soSwitch","soTime","submit","toast","txt"],
      },
    ],
    "/docs/souni/js":[
      {
        text: "Js",
        children: ["index.html","01.tools", "02.ajax","03.pop","04.rules","05.sys"],
      },
    ],
    "/docs/theme-reco/": [
      {
        text: "module one",
        children: ["home", "theme"],
      },
      {
        text: "module two",
        children: ["api", "plugin"],
      },
    ],
}
export default series;
(()=>{"use strict";class t{static formatCurrency(t,e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=e?e:2}).format(t)}}class e{constructor(t,e){this.address=t,this._value=e}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}formattedNumerical(){return t.formatCurrency(parseFloat(this.value()))}}class r{constructor(t){this.cells=t}getCell(t){const e=this.cells.filter((e=>e.address===t));return 0==e.length?null:e[0]}}$((function(){function t(e){if(isNaN(e))return;let r,l=(e=Math.abs(Math.floor(e)))%26,s=e/26;return e<=26?n(e):(s>=1&&(0===l&&s--,r=t(s)),0===l&&(l=26),r+n(l));function n(t){if(!(t>26||t<0))return 0===t?"":"ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(t-1,t)}}fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json").then((t=>t.text())).then((l=>{const s=JSON.parse(l.substring(l.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,n=new r(s.map(((r,l)=>r.c.map((function(r,s){if(null!==r&&null!==r.v)return new e(`${t(s+1)}${l+1}`,r.v)})).filter((t=>null!=t)))).reduce(((t,e)=>[...t,...e])));$("#dollarCourse").html(n.getCell("C6").formattedNumerical)}))}))})();
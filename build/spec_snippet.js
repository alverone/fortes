(()=>{"use strict";const t=new class{get(t){try{return JSON.parse(localStorage.getItem(t))}catch(s){return localStorage.getItem(t)}}set(t,s){localStorage.setItem(t,s.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(t){const s={};for(const e in t)"length"!==e&&"costPerMetre"!=e&&("true"!==String(t[e])?"false"!==String(t[e])?isFinite(Number(t[e]))?s[e]=Number(t[e]):s[e]=t[e]:s[e]=0:s[e]=1);return JSON.stringify(s)}};t.set("space",50),t.set("amount_of_rooms",2),t.set("amount_of_bathrooms",1),t.set("windows_installation",1),t.set("demontage",1),t.set("heated_flooring",1),t.set("conditioning",1),t.set("builtin_furiture",1),t.set("cement_screed",1),t.set("finishing_materials",1),t.set("furniture_bool",1),t.set("bath",1),t.set("shower",1),t.set("appliances_bool_total",1),t.set("denoising",1),t.set("entrance_doors",1),t.set("flooring","vynil"),t.set("transportation_expenses",5),t.set("style","cozy")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDUCxFQUFRTyxJQUFJLFlBQWEsR0FDekJQLEVBQVFPLElBQUksaUJBQWtCLEdBQzlCUCxFQUFRTyxJQUFJLFdBQVksU0FDeEJQLEVBQVFPLElBQUksMEJBQTJCLEdBQ3ZDUCxFQUFRTyxJQUFJLFFBQVMsTyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvcnRlcy8uL3NyYy9zcGVjX3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vZm9ydGVzLy4vc3JjL3V0aWxzL0xvY2FsU3RvcmFnZUhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxTdG9yYWdlSGFuZGxlciB9IGZyb20gXCIuL3V0aWxzL0xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcblxuY29uc3Qgc3RvcmFnZTogTG9jYWxTdG9yYWdlSGFuZGxlciA9IG5ldyBMb2NhbFN0b3JhZ2VIYW5kbGVyKCk7XG5zdG9yYWdlLnNldChcInNwYWNlXCIsIDUwKTtcbnN0b3JhZ2Uuc2V0KFwiYW1vdW50X29mX3Jvb21zXCIsIDIpO1xuc3RvcmFnZS5zZXQoXCJhbW91bnRfb2ZfYmF0aHJvb21zXCIsIDEpO1xuc3RvcmFnZS5zZXQoXCJ3aW5kb3dzX2luc3RhbGxhdGlvblwiLCAxKTtcbnN0b3JhZ2Uuc2V0KFwiZGVtb250YWdlXCIsIDEpO1xuc3RvcmFnZS5zZXQoXCJoZWF0ZWRfZmxvb3JpbmdcIiwgMSk7XG5zdG9yYWdlLnNldChcImNvbmRpdGlvbmluZ1wiLCAxKTtcbi8vbWlzdGFrZSBpcyBvbiBwdXJwb3NlXG5zdG9yYWdlLnNldChcImJ1aWx0aW5fZnVyaXR1cmVcIiwgMSk7XG5zdG9yYWdlLnNldChcImNlbWVudF9zY3JlZWRcIiwgMSk7XG5zdG9yYWdlLnNldChcImZpbmlzaGluZ19tYXRlcmlhbHNcIiwgMSk7XG5zdG9yYWdlLnNldChcImZ1cm5pdHVyZV9ib29sXCIsIDEpO1xuc3RvcmFnZS5zZXQoXCJiYXRoXCIsIDEpO1xuc3RvcmFnZS5zZXQoXCJzaG93ZXJcIiwgMSk7XG5zdG9yYWdlLnNldChcImFwcGxpYW5jZXNfYm9vbF90b3RhbFwiLCAxKTtcbnN0b3JhZ2Uuc2V0KFwiZGVub2lzaW5nXCIsIDEpO1xuc3RvcmFnZS5zZXQoXCJlbnRyYW5jZV9kb29yc1wiLCAxKTtcbnN0b3JhZ2Uuc2V0KFwiZmxvb3JpbmdcIiwgXCJ2eW5pbFwiKTtcbnN0b3JhZ2Uuc2V0KFwidHJhbnNwb3J0YXRpb25fZXhwZW5zZXNcIiwgNSk7XG5zdG9yYWdlLnNldChcInN0eWxlXCIsIFwiY296eVwiKTtcbiIsImNsYXNzIExvY2FsU3RvcmFnZUhhbmRsZXIge1xuICBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXQoXCJzdHlsZVwiLCBcImNvenlcIik7XG4gICAgdGhpcy5zZXQoXCJiYXRoXCIsIHRydWUpO1xuICAgIHRoaXMuc2V0KFwic2hvd2VyXCIsIGZhbHNlKTtcbiAgICB0aGlzLnNldChcImNlaWxpbmdcIiwgXCJzdHJldGNoIGNlaWxpbmdcIik7XG4gICAgdGhpcy5zZXQoXCJmbG9vcmluZ1wiLCBcImxhbWluYXRcIik7XG4gICAgdGhpcy5zZXQoXCJoeWdpZW5pY19zaG93ZXJcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwic2Vjb25kX2d5cHN1bV9sYXllclwiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJmbG9vcl9zY3JlZWRcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiaGVhdGVkX2Zsb29yaW5nXCIsIGZhbHNlKTtcbiAgICB0aGlzLnNldChcImRlbm9pc2luZ1wiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJlbnRyYW5jZV9kb29yc1wiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJjb25kaXRpb25pbmdcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiYW1vdW50X29mX3Jvb21zXCIsIDIpO1xuICAgIHRoaXMuc2V0KFwiYW1vdW50X29mX2JhdGhyb29tc1wiLCAxKTtcbiAgICB0aGlzLnNldChcImFwcGxpYW5jZXNcIiwgXCJnb3JlbmplXCIpO1xuICAgIHRoaXMuc2V0KFwiYXBwbGlhbmNlc19ib29sX3RvdGFsXCIsIGZhbHNlKTtcbiAgICB0aGlzLnNldChcImZ1cm5pdHVyZV9ib29sXCIsIHRydWUpO1xuICAgIHRoaXMuc2V0KFwic3BhY2VcIiwgNTApO1xuICB9XG5cbiAgaW5pdFBvcnR1Z2FsKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0KFwic3R5bGVcIiwgXCJjb3p5XCIpO1xuICAgIHRoaXMuc2V0KFwic3BhY2VcIiwgNTApO1xuICAgIHRoaXMuc2V0KFwiYW1vdW50X29mX3Jvb21zXCIsIDIpO1xuICAgIHRoaXMuc2V0KFwiYW1vdW50X29mX2JhdGhyb29tc1wiLCAxKTtcbiAgICB0aGlzLnNldChcImJhdGhcIiwgdHJ1ZSk7XG4gICAgdGhpcy5zZXQoXCJzaG93ZXJcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiZmxvb3JpbmdcIiwgXCJsYW1pbmF0XCIpO1xuICAgIHRoaXMuc2V0KFwiZmluaXNoaW5nX21hdGVyaWFsc1wiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJkZW1vbnRhZ2VcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiY2VtZW50X3NjcmVlZFwiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJoZWF0ZWRfZmxvb3JpbmdcIiwgMCk7XG4gICAgdGhpcy5zZXQoXCJkZW5vaXNpbmdcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiZW50cmFuY2VfZG9vcnNcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwid2luZG93c19pbnN0YWxsYXRpb25cIiwgMCk7XG4gICAgdGhpcy5zZXQoXCJidWlsdGluX2Z1cm5pdHVyZVwiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJjb25kaXRpb25pbmdcIiwgMCk7XG4gICAgdGhpcy5zZXQoXCJmdXJuaXR1cmVfYm9vbFwiLCBmYWxzZSk7XG4gICAgdGhpcy5zZXQoXCJhcHBsaWFuY2VzX2Jvb2xfdG90YWxcIiwgZmFsc2UpO1xuICAgIHRoaXMuc2V0KFwiYXBwbGlhbmNlc1wiLCBcImdvcmVuamVcIik7XG4gICAgdGhpcy5zZXQoXCJ0cmFuc3BvcnRhdGlvbl9leHBlbnNlc1wiLCA1KTtcbiAgfVxuXG4gIHN0b3JhZ2VUb1JlcXVlc3RCb2R5KHN0b3JhZ2U6IFN0b3JhZ2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgaWYgKGtleSA9PT0gXCJsZW5ndGhcIiB8fCBrZXkgPT0gXCJjb3N0UGVyTWV0cmVcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFN0cmluZyhzdG9yYWdlW2tleV0pID09PSBcInRydWVcIikge1xuICAgICAgICByZXN1bHRba2V5XSA9IDE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChTdHJpbmcoc3RvcmFnZVtrZXldKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gMDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Zpbml0ZShOdW1iZXIoc3RvcmFnZVtrZXldKSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBOdW1iZXIoc3RvcmFnZVtrZXldKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtrZXldID0gc3RvcmFnZVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICB9XG59XG5cbmV4cG9ydCB7IExvY2FsU3RvcmFnZUhhbmRsZXIgfTtcbiJdLCJuYW1lcyI6WyJzdG9yYWdlIiwiZ2V0IiwibmFtZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImluaXQiLCJ0aGlzIiwiaW5pdFBvcnR1Z2FsIiwic3RvcmFnZVRvUmVxdWVzdEJvZHkiLCJyZXN1bHQiLCJrZXkiLCJTdHJpbmciLCJpc0Zpbml0ZSIsIk51bWJlciIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=
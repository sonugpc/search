import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
    value: any;

    transform(value: any, args: any,type:string,id:any,availableids:any): any {
      console.log(args,id,availableids)
      if(!availableids.includes(id)){
          return value;
      }
      if(type==null){
        type="general";
      }
        if (!args) {return value;}


        args.forEach(text => {
          
      
            var reText = new RegExp(text.item, 'gi');
            value = value.replace(reText, `<mark class=${text.entity}>`+ text.item + `</mark>`);
            //for your custom css
            // value = value.replace(reText, "<span class='highlight-search-text'>" + text + "</span>"); 

          });
        return value;
    }
}
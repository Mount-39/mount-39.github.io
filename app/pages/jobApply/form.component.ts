import {Component} from 'angular2/core';
import {InputElement} from './text-input/text-input.component';

@Component({
    selector: 'form-el',
     directives: [InputElement],
    template: `<form>
                <input-el [option]="'text'" [text]="'Name'"></input-el>
                <input-el [option]="'text'" [text]="'Surmane'"></input-el>
                <input-el [option]="'number'" [text]="'Phone'"></input-el>
    </form>`
})
export class FormElement { }
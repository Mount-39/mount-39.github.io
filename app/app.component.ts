import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';


import {FormElement} from './pages/jobApply/form.component';

@Component({
    selector: 'my-app',
     directives: [FormElement],
    template: `<section class="content bgcolor-4">
					<h3>{{clock | async | date: 'yMMMMEEEEdjms'}}</h3>
					<h2>Mount 39</h2>
					<form-el></form-el>
				</section>`
})
export class AppComponent {
	clock = Observable
		.interval(1000)
		.map(()=> new Date());
}
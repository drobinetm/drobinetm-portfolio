import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Personal} from '../../models/personal';
import {Social} from '../../models/social';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    public personal: Personal = undefined;
    public social: Social = undefined;
    public isLoading = true;

    constructor(private loadJson: LoadJsonService) {
    this.personal = this.initPersonal();
    this.social = this.initSocial();
    }

    ngOnInit(): void {
        this.loadJson.loadJSON('./assets/json/about-me.json').subscribe((json) => {
            this.personal = json[0].personal;
            this.social = json[0].social;

            setTimeout(() => this.isLoading = false, 1000);
        });
    }

    protected initPersonal(): Personal {
    return {name: '', website: '', phone: '', city: '', age: 0, degree: '', email: '', slogan: '', cvUrl: ''};
    }

    protected initSocial(): Social {
    return {github: '', linkedin: '', twitter: '', instagram: ''};
    }

    // tslint:disable-next-line:typedef
    public sendEmail(e: Event) {
        e.preventDefault();

        const templateId: string = environment.templateId;
        const serviceId: string = environment.serviceId;
        const publicKey: string = environment.publicKey;

        emailjs
            .sendForm(serviceId, templateId, e.target as HTMLFormElement, {
                publicKey
            })
            .then(
                () => {
                        (document.getElementById('sent-message') as HTMLFormElement).style.display = 'block';
                        (document.getElementById('contact-form') as HTMLFormElement).reset();

                        setTimeout(() => {
                        (document.getElementById('sent-message') as HTMLFormElement).style.display = 'none';
                        }, 3000);

                        console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', (error as EmailJSResponseStatus).text);
                },
            );
        }
}

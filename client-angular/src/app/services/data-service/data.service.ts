import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private httpClient: HttpClient) {

    }

    getAlbum() {
        this.httpClient.get('http://localhost:4200/albums')
            .subscribe(
                res => {
                    /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
                    console.log(res);
                },
                error => {
                    /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
                    console.log(error);
                }
            );
    }
    getMembers() {
        this.httpClient.get('http://localhost:4200/members')
            .subscribe(
                res => {
                    /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
                    console.log(res);
                },
                error => {
                    /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
                    console.log(error);
                }
            );
    }
    getconcertTours() {
        this.httpClient.get('http://localhost:4200/concertTours')
            .subscribe(
                res => {
                    /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
                    console.log(res);
                },
                error => {
                    /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
                    console.log(error);
                }
            );
    }
    getLabels() {
        this.httpClient.get('http://localhost:4200/labels')
            .subscribe(
                res => {
                    /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
                    console.log(res);
                },
                error => {
                    /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
                    console.log(error);
                }
            );
    }
}
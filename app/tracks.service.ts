import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TrackService {
  apiKey = "";
  private trackURL = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + this.apiKey;

  constructor(private http: Http){}

  getTracks(artist: string, album: string): Observable<string[]>{
    return this.http.get(this.trackURL + "&artist=" + artist + "&album=" + album + "&format=json").map(this.extractTracks).catch(this.handleError);
  }

  private extractTracks(res: Response){
    let response = res.json();
    var trackList: string[] = [];
    trackList.push(response.album.image[3]["#text"]);
    for(var i = 0; i < response.album.tracks.track.length; i++){
      trackList.push(response.album.tracks.track[i].name);
    }
    return trackList;
  }

  private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}
}

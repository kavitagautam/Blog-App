import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {

  editor: Editor;
  html:'';
articles: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
     this.articles = firestore.collection('article').valueChanges();
   }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy():void {
    this.editor.destroy();
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {

  articles: Observable<any[]>;
  Comment: Observable<any[]>;
  commentForm: FormGroup;

  constructor( private firestore: AngularFirestore, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildCommentForm();
    this.getArticleFromDatabase();
    this.getCommentFromDatabase();
  }

  buildCommentForm():void {
    this.commentForm = this._fb.group({
      id: [],
      comment: ['']
    })
  }

  onComment():void {
    this.saveCommentToDatabase(this.commentForm.value)
      .then(res => {
        console.log(res)
      });
    console.log(this.commentForm.value);
  }


  saveCommentToDatabase(data): any{
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("Comment")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }


  getCommentFromDatabase(): any{
    return this.Comment = this.firestore.collection('Comment').valueChanges();
  }

  
  getArticleFromDatabase(): any{
    return this.articles = this.firestore.collection('article').valueChanges();
  }

}

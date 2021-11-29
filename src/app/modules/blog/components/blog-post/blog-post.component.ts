import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {

  editor: Editor;
  html:'';
  articles: Observable<any[]>;
  blogForm: FormGroup;

  constructor(private firestore: AngularFirestore, private _fb: FormBuilder) {}


  ngOnInit(): void {
    this.buildBlogForm();
    this.editor = new Editor({
      content:''
    });
  }

  ngOnDestroy():void {
    this.editor.destroy();
  }

  buildBlogForm():void {
    this.blogForm = this._fb.group({
      id: [],
      title: [''],
      category: [''],
      content: [''],
      date:[new Date()],
      author: ['']
    })
  }


  onPost():void {
    this.saveArticleToDatabase(this.blogForm.value)
      .then(res => {
        console.log(res)
      });
    console.log(this.blogForm.value);
  }


  saveArticleToDatabase(data): any{
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("article")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

}

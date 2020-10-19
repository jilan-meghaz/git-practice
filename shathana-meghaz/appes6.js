class Book{
  constructor(title,author,isbn){
  
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }
}

class UI
{
  addBooktoList(book){
    const list = document.getElementById('book-list');
    console.log(list)
    const row = document.createElement('tr');
    console.log(tr)
    //insert row
    row.innerHTML=`
     <td>${book.title}</td>
     console.log(${book.title})
     <td>${book.author}</td>
     console.log(${book.author})
     <td>${book.isbn}</td>
     console.log(${book.isbn})
     <td><a href="#" class="delete">x</a></td>
     `;
    list.appendChild(row);
  }
  showAlert(message,className){
  
    //create div
    const div = document.createElement('div')
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);
    //

    //set timeout for 3 set
    setTimeout(function(){
    
      document.querySelector('.alert').remove();

    },3000);
  }
  deleteBook(target){
  
    if(target.className === 'delete')
    {
        target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
  
     document.getElementById('title').value ='';
     document.getElementById('author').value ='';
     document.getElementById('isbn').value ='';
  }
  
}

//add Event Listener for add Book

document.getElementById('book-form').addEventListener('submit',function(e){
  
  //get form values

    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value


    console.log(tilte.value);
    console.log(author.value);    
    console.log(isbn.value);         

    //instantiate Book class

    const book = new Book(title,author,isbn);

    //instantiate UI

    const ui = new UI();
    console.log(ui);

    //validate

    if(title === '' || author ==='' ||isbn===''){
    
         //Error alert
         ui.showAlert('please fill in all fields','error');

    }
    else{
    
        //add book to list
        ui.addBooktoList(book);
        
       // Show success
       ui.showAlert('Book Added!', 'success');
  
       // Clear fields
       ui.clearFields();
    }
    e.preventDefault();   
  
});
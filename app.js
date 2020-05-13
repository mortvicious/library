// ;(function() {
     class Book {
          constructor(title, author, pages) {
               this.title = title
               this.author = author
               this.pages = pages
               this.readed = readed
          }     
     }

     let newDiv
     let buttonDiv
     let deleteDiv
     const mainInfoContainer = document.querySelector(`.main-info-container`)
     const showBtn = document.querySelector(`.open-hidden-form-btn`)
     const inTitle = document.querySelector(`.input-title-el`)
     const inAuthor = document.querySelector(`.input-author-el`)
     const inPages = document.querySelector(`.input-page-el`)
     const addBtn = document.querySelector(`.add-book-btn`)
     const checkRead = document.querySelector(`.check-read`)
     const summaryBook = document.querySelector(`.summary-el`)
     const inputErr = document.querySelector(`.hidden-error`)
     summaryBook.textContent = `Books: 0`
     let formHidden = true

     const library = []
     let title = ``
     let author = ``
     let pages = ``
     let readed = false
     let flagT = false
     let flagA = false
     let flagP = false

     showBtn.addEventListener(`click`, showForm)
     inTitle.addEventListener(`change`, saveInfo)
     inAuthor.addEventListener(`change`, saveInfo)
     inPages.addEventListener(`change`, saveInfo)
     checkRead.addEventListener(`change`, changeNewStatus)
     addBtn.addEventListener(`click`, inputCheck)   


     function inputCheck() {
          checkT()
          checkA()
          checkP()
          if (flagT === true && flagA === true && flagP === true) {
               inputErr.style.display = `none`
               addBook()
               flagT = false
               flagA = false
               flagP = false
          } else {
               inputErr.style.display = `flex`
          }
     }

     function checkT() {
          if (title.length < 1) {
          } else {
               flagT = true
          }
     }
     function checkA() {
          if (author.length < 1) {
          } else {
               flagA = true
          }
     }
     function checkP() {
          if (pages.length < 1) {
          } else {
               flagP = true
          }
     }

     function addBook(libElement) {
          libElement = new Book(title, author, pages, readed)
          library.push(libElement)
          render()
          clear()
          summaryBook.textContent = (`Books: ${library.length}`)
     }

     function render() {
          createElContainer(`div`, `added-book-container`)
          createPars()
          createBtns()
          checkForRead()
          cssClasses()
          syncLibnPars()
          appendEssentials()
     }


     function createElContainer(element, cssClass) {
          newDiv = document.createElement(element)
          newDiv.classList.add(cssClass)
          newDiv.title = title
          mainInfoContainer.appendChild(newDiv)
     }

     function createPars() {
          newTitle = document.createElement(`p`);
          newAuthor  = document.createElement(`p`);
          newPageCount = document.createElement(`p`); 
     }

     function syncLibnPars() {
          newTitle.textContent = title
          newAuthor.textContent = author
          newPageCount.textContent = pages
     }

     function createBtns() {
          buttonDiv = document.createElement(`div`);
          deleteDiv = document.createElement(`button`);
          deleteDiv.addEventListener(`click`, deleteBook);
          changeBtn = document.createElement(`button`);
          changeBtn.addEventListener(`click`, changeStatus);
     }

     function checkForRead() {
          if (readed === false) {
               changeBtn.textContent = `NO`
               changeBtn.classList.add(`readed-false`)
          } else if(readed === true) {
               changeBtn.textContent = `YES`
               changeBtn.classList.add(`readed-true`)
          }
     }

     function deleteBook(e) {
          let objInd = searchItem(e)
          library.splice(objInd, 1)
          mainInfoContainer.removeChild(e.target.parentNode.parentNode)
          summaryBook.textContent = `Books: ${library.length}`
     }

     function searchItem(e) {
          let obj = library.find(o => o.title === e.target.parentNode.parentNode.title)
          let objInd = library.findIndex(a => a.title === obj.title)
          return objInd
     }

     function changeStatus(e) {
          objInd = searchItem(e)
               if (library[objInd].readed === false) {
                    library[objInd].readed = true       
                    renderStatus(objInd, e)
               } else if (library[objInd].readed === true) {
                    library[objInd].readed = false
                    renderStatus(objInd, e)
               }
     }

     function renderStatus(objInd, e) {
          if (library[objInd].readed === false) {
               e.target.classList.add(`readed-false`)
               e.target.textContent = `NO`
               e.target.classList.remove(`readed-true`)
          } else if (library[objInd].readed === true) {
               e.target.classList.add(`readed-true`)
               e.target.classList.remove(`readed-false`)
               e.target.textContent = `YES`
          }
     }

     function appendEssentials() {
          newDiv.appendChild(newTitle);          
          newDiv.appendChild(newAuthor);
          newDiv.appendChild(newPageCount);
          newDiv.appendChild(buttonDiv);
          buttonDiv.appendChild(deleteDiv);
          buttonDiv.appendChild(changeBtn);
     }

     function cssClasses() {
          buttonDiv.classList.add(`func-btn-container`);
          deleteDiv.classList.add(`delete-btn`);
          newTitle.classList.add(`title-par-el`);
          newAuthor.classList.add(`author-par-el`);
          newPageCount.classList.add(`page-count-par-el`);
          changeBtn.classList.add(`change-btn`);
     }

     function clear() {
          inTitle.value = ``
          title = ``
          inAuthor.value = ``
          author = ``
          inPages.value = ``
          pages = ``
          readed = false
     }

     function changeNewStatus() {
          if (readed === false) {
               readed = true
          } else if (readed === true) {
               readed = false
          }
     }

     function saveInfo() {
          title = inTitle.value
          author = inAuthor.value
          pages = inPages.value
     }

     function showForm() {
          let form = document.querySelector(`.hidden-form-container`)
               if (formHidden === true) {
                    form.style.display = `flex`
                    formHidden = false
                    showBtn.textContent = `Hide`
               } else if (formHidden === false) {
                    form.style.display = `none`
                    formHidden = true
                    showBtn.textContent = `Show`
               }
          }

// })();


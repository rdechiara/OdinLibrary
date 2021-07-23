const app = (function()
{
    let container = undefined;
    let form = undefined;
    let addButton = undefined;
    let toggleButton = undefined;
    let inventory = [];

    /*
    ** Set the container id for the app
    */
    function setContainer(id)
    {
        container = document.getElementById(id);
        console.log(`container is ${container}`);
    }
    /*
    ** Set the form id from which book
    ** info are retrieved
    */
    function setForm(id)
    {
        form = document.getElementById(id);
        console.log(`form is ${form}`);
    }
    /*
    ** Set callback for form's button
    ** which adds a book to the library
    */
    function setAddBookButton(id)
    {
        addButton = document.getElementById(id);
        addButton.onclick = (e) =>
        {
            
            const book = getInput();
            if(book.title === `` || book.author === ``)
            {
                return;
            }
            inventory.push(book);
            renderBook(book.title, book.author, book.read);
            e.preventDefault();

        }
        console.log(`addButton is ${addButton}`);
    }
    /*
    ** Assign callback function to the toggle button (id)
    */
    function setToggleButton(id)
    {
        toggleButton = document.getElementById(id);
        toggleButton.onclick = toggleForm;
        console.log(`toggleButton is ${toggleButton}`);
    }
    /*
    ** Toggle the form
    */
    function toggleForm()
    {
        const formStatus = form.style.display;

        if(formStatus === `block`)
        {
            form.style.display = `none`;
            toggleButton.textContent = `+`;
            toggleButton.style.fontSize = `x-large`;
        }
        else
        {
            form.style.display = `block`;
            toggleButton.textContent = `X`;
        }
    }
    /*
    ** Retrieve data from form
    */
    function getInput()
    {
        // get the input nodes
        const titleInput = document.getElementById(`title`);
        const authorInput = document.getElementById(`author`);
        const readInput = document.getElementById(`read-yes`);
        // save their value
        const title = titleInput.value;
        const author = authorInput.value;
        const read = readInput.checked;
        // clear input fields
        titleInput.value = ``;
        authorInput.value = ``;


        return {title, author, read};
    }
    /*
    ** Render the book in a simple card
    */
    function renderBook(title, author, read)
    {
        // create parent element for book card
        const card = document.createElement(`blockquote`);
        card.name = `${title} ${author}`;

        const close = document.createElement(`a`);
        close.textContent = `X`;
        close.classList.add(`button-outline`)
        // assign callback for deleting a book
        close.onclick = (e) =>
        {
            const name = e.target.name;
            const idx = inventory.indexOf((book) => name === `${book.title} ${book.author}`);
            inventory.splice(idx, 1);
            e.target.parentNode.remove();
            console.log(inventory);
        };
        // render html card
        card.innerHTML = `
        <p><strong>Title: </strong><span> ${title}</span></p>
        <p><strong>Author: </strong><span> ${author}</span></p>
        <strong> Already read:</strong><span> ${read}</span>
    </blockquote>`;
        card.prepend(close);
        container.append(card);
    }
    
    return {setContainer, setForm, setAddBookButton, setToggleButton};
})();
// app setup
app.setContainer(`root`);
app.setForm(`book-form`);
app.setAddBookButton(`add-button`);
app.setToggleButton(`toggle-button`);
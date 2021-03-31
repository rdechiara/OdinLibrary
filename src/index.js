const app = (function()
{
    let container = undefined;
    let form = undefined;
    let addButton = undefined;
    let toggleButton = undefined;
    let inventory = [];

    function setContainer(id)
    {
        container = document.getElementById(id);
        console.log(`container is ${container}`);
    }
    function setForm(id)
    {
        form = document.getElementById(id);
        console.log(`form is ${form}`);
    }
    function setAddBookButton(id)
    {
        addButton = document.getElementById(id);
        addButton.onclick = (e) =>
        {
            
            const book = getInput();
            inventory.push(book);
            renderBook(book.title, book.author, book.read);
        }
        console.log(`addButton is ${addButton}`);
    }
    function setToggleButton(id)
    {
        toggleButton = document.getElementById(id);
        toggleButton.onclick = toggleForm;
        console.log(`toggleButton is ${toggleButton}`);
    }

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

    function getInput()
    {
        const title = document.getElementById(`title`).value;
        const author = document.getElementById(`author`).value;
        const read = document.getElementById(`read-yes`).checked;
        console.log(title, author, read);

        return {title, author, read};

    }

    function renderBook(title, author, read)
    {
        const card = document.createElement(`blockquote`);
        const close = document.createElement(`a`);
        close.textContent = `X`;
        close.classList.add(`button-outline`)
        close.onclick = (e) =>
        {
            e.target.parentNode.remove();
        };
        
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

app.setContainer(`root`);
app.setForm(`book-form`);
app.setAddBookButton(`add-button`);
app.setToggleButton(`toggle-button`);
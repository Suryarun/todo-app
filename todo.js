let list = []
let ind = -1;
let submitButton = document.getElementById("btn");
submitButton.addEventListener('click', (e) => {
    onSave(e);
})

function onSave(e) {
    e.preventDefault();
    console.log(list);
    let a = document.getElementById("inputbox").value;
    if (a === "") {
        alert("Please enter a task");
        return;
    }
    else {
        document.getElementById("inputbox").value = "";
        if (ind === -1) {
            list.push(a);
        }
        else {
            list[ind] = a;
            ind = -1;
        }
        refreshlist();
    }
}

function onremove(index) {
    list.splice(index, 1);
    console.log(list);
    refreshlist();
}

function edit(index) {
    document.getElementById("inputbox").value = list[index];
    console.log(index);
    ind = index;
}

function refreshlist() {
    console.log(list)
    let box = document.getElementById("addedlist");
    box.textContent = "";
    let ul = document.createElement("ul");
    ul.className = "li";
    list.forEach((x, index) => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        div.className = 'element';
        let span = document.createElement('span');
        span.className = 'text';
        span.textContent = x;
        let span2 = document.createElement('span');
        span2.className = "material-symbols-outlined";
        span2.textContent = 'edit';
        span2.addEventListener('click', (e) => {
            edit(index);
        })
        let btn = document.createElement('button');
        btn.addEventListener('click', () => {
            onremove(index);
        })
        btn.textContent = 'remove';
        btn.className = "button";
        div.appendChild(span2);
        div.appendChild(span);

        div.appendChild(btn);
        li.appendChild(div);
        ul.appendChild(li);
    })
    box.appendChild(ul);
}

// Get the user's name (you can replace this with your own logic to retrieve the name)
var name = prompt("Please enter your name:");

// Function to display the current time
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format the time as desired (e.g., HH:MM:SS)
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    // Display the name and current time on the website
    document.getElementById('name').textContent = name;
    document.getElementById('time').textContent = '' + formattedTime;
}

// Call the displayTime function initially
displayTime();

// Update the time every second (1000 milliseconds)
setInterval(displayTime, 1000);



new Vue({
    el: '#app',
    data() {
      return {
        todoList: [
          {"id":0,"title":"Go to codepen and get inspired","done":false},
          {"id":1,"title":"Pick a project","done":false},
          {"id":2,"title":"Create a new pen","done":true}
        ],
        new_todo: '',
        showComplete: false,
      };
    },
    mounted() {
      this.getTodos()
    },
    watch: {
      todoList: {
        handler(updatedList) {
          localStorage.setItem('todo_list', JSON.stringify(updatedList));
        },
        deep: true
      }
    },
    computed:{
      pending() {
        return this.todoList.filter(item => !item.done)
      },
      completed() {
        return this.todoList.filter(item => item.done);
      },
      completedPercentage() {
        return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
      },
      today() {
        var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = {
          day: weekday[today.getDay()],
          date:  mm + '-' + dd + '-' + yyyy,
        }

        return(today);
      }
    },
    methods: {
      // get all todos when loading the page
      getTodos() {
        if (localStorage.getItem('todo_list')) {
          this.todoList = JSON.parse(localStorage.getItem('todo_list'));
        }
      },
      // add a new item
      addItem() {
        // validation check
        if (this.new_todo) {
          this.todoList.unshift({
            id: this.lastId() + 1,
            title: this.new_todo,
            done: false,
          });
        }
        // reset new_todo
        this.new_todo = '';
        // save the new item in localstorage
        return true;
      },
      lastId() {
        idList = this.todoList.map(item => item.id)
        return Math.max(...idList)
      },
      deleteItem(item) {
        this.todoList.splice(this.todoList.indexOf(item), 1);
        lastId = this.lId()
      },
      toggleShowComplete() {
        this.showComplete = !this.showComplete;
      },
      clearAll() {
        this.todoList = [];
      }
    },
  });


const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

  

(function() {
  describe('Check if data was added', function() {

  	var todocontroller;
	beforeEach(function(){
		module("todoApp.todoController"); 

		inject(function($controller){
			todocontroller = $controller('todoController');
		});
	});

  	var notes = [{
        "id": "1",
        checked: false,
        "name": "Lezen",
        "wid": "1",
        "cid": "1",
        "pid": "1",
    }];

    var categories = [{
        "id": "1",
        "name": "School",
    }]; 

    var priorities = [{
        "id": "1",
        "name": "High",
        "color": "red",
    }];

 	var comment = [{
        "id": "1",
        "note": "Architectuur boek",
    }];

    it('notes should be null', function(){
		todocontroller.deleteItem(notes);
		expect(notes).toBeNull();
    });
    //todocontroller.deleteItem(notes);

    //expect(notes).toBeNull();  

    console.log(notes);

    it('TEST', function(){
		expect(todocontroller(notes).toBe(categories));
    });
   

    //it('')
	
	});

});
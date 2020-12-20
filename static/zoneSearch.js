var users = [
  'Goku',
  'Naruto',
  'Ichigo',
  'Flash',
  'Batman',
  'Sherlock Holmes',
  'Khaleesi',
  'Steve Fox'
];

let ul = document.getElementById("users-list");

var render_lists = function(lists){
  var li = "";
  for(index in lists){
    li += "<option>" + lists[index] + "</option>";
  }
  ul.innerHTML = li;
}

render_lists(users);

// lets filters it
let input = document.getElementById('filter_users');

var filterUsers = function(event){
  keyword = input.value.toLowerCase();
  filtered_users = users.filter(function(user){
        user = user.toLowerCase();
       return user.indexOf(keyword) > -1;
  });

  render_lists(filtered_users);
}

input.addEventListener('keyup', filterUsers);

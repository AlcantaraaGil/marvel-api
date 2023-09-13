let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let characterName = document.getElementById("characterName");
let showContainer = document.getElementById("show-container");




async function findCharacter(name) {
  try {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5be9c8724ac4248fb6ca6129211265e4&hash=0a6783b40c524d7ec5550eab82d1984e&name=${name}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    showContainer.innerHTML = `
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${jsonData.data['results'][0].thumbnail.path}.${jsonData.data['results'][0].thumbnail.extension}  " alt="">    
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 id="characterName" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${jsonData.data['results'][0].name}</h5>     
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${jsonData.data['results'][0].description}</p>
            <button type="submit" class="text-white right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">View latest comics</button>
        </div>
        
    </a>
    `;


  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async (event) => {
    event.preventDefault();
  const inputValue = input.value.trim(); // Obtén el valor del input y elimina espacios en blanco al principio y al final
  if (inputValue.length < 1) {
    alert("Input cannot be blank");
  } else {
    findCharacter(inputValue);
  }
});
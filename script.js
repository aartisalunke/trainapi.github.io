// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '41317bbf1cmshabe70979ee7c4f3p18015cjsn4e10e3d30176',
// 		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
// 	}
// };

// fetch('https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=194', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




const form = document.getElementById('MyForm');




const getData = (event) => {
    
    event.preventDefault();
    const trainNumber = document.forms['form1']['trainNum'].value;
    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '41317bbf1cmshabe70979ee7c4f3p18015cjsn4e10e3d30176',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    fetch(`https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=${trainNumber}`, options)
        .then(response => response.json())
        .then(response => 
            
            response.data.map((cval) => {

                document.getElementById('railwaysdata').innerHTML+=`
                <div>  
                <table>  
                   <tr>
                   <th>Train name : </th>
                    <td>${cval.train_name}</td>
                    </tr>
                        
                    <tr>
                    <th>Train number : </th>
                    <td>${cval.train_number}</td>
                  </tr>
                   
                    <tr>
                      <th> New train no. :</th>
                      <td>${cval.new_train_number}</td>
                  </tr>
                   </table>
                   </div>
                `
            })
            
            )
        .catch(err => console.error(err));


}


form.addEventListener('submit', getData)
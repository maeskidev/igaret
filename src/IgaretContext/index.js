import React from "react";

const IgaretContex = React.createContext();

function IgaretProvider(props){

    let datos = [
      [
          {
              "dia": "martes, 20 de dic de 2022, 4:27 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:27 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:27 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:27 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:27 p. m."
          }
      ],
      [
          {
              "dia": "martes, 20 de dic de 2022, 4:28 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:28 p. m."
          },
          {
              "dia": "martes, 20 de dic de 2022, 4:28 p. m."
          }
      ],
      [
        {
            "dia": "martes, 20 de dic de 2022, 4:29 p. m."
        },
        {
            "dia": "martes, 20 de dic de 2022, 4:29 p. m."
        },
        {
            "dia": "martes, 20 de dic de 2022, 4:29 p. m."
        }
      ],
      [
        {
            "dia": "martes, 20 de dic de 2022, 4:30 p. m."
        },
        {
            "dia": "martes, 20 de dic de 2022, 4:30 p. m."
        },
        {
            "dia": "martes, 20 de dic de 2022, 4:30 p. m."
        }
      ]
  ]

    const [count, setCount] = React.useState(datos);

    const addCigarette = () => {

      const lastDay = count.length-1
      const todayDate = new Date().toLocaleDateString("es-us",{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'})
      
      const added = [...count];

      if(!added || added === [] || added.length === 0){
        added.push([{dia: todayDate}])
      }
      else {
        if(added[lastDay][added[lastDay].length-1].dia === todayDate){
          added[lastDay].push({dia: todayDate})
        }else{
          added.push([{dia: todayDate}])
        }
      }
      

      setCount(added)
      console.log(count)
    }



    return (
        <IgaretContex.Provider
          value={{
            count,
            addCigarette,
          }}
        >
          {props.children}
        </IgaretContex.Provider>
      );
}

export { IgaretContex, IgaretProvider};
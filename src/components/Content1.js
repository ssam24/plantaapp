import React, { Component } from 'react';

class Content1 extends Component {
	constructor(props){
        super(props);
        this.state = {
            plants: [
                {
                    "id": 8,
                    "common_name": "Celery",
                    "family_name": "Apiaceae",
                    "scientific_name": "Apium L.",
                    "cost": 78
                  },
                  {
                    "id": 9,
                    "common_name": "Alkali Milkvetch",
                    "family_name": "Fabaceae",
                    "scientific_name": "Astragalus tener A. Gray",
                    "cost": 54
                  },
            ]
        };
    }
    componentDidMount(){
        fetch('https://plants-backend.now.sh/plants')
        .then((respuesta) => {
            return respuesta.json();
        }).then((plantas) => {
            console.log(plantas);
            this.setState({
                plants: plantas
            })
        }) 
    }
    render() {
        let {plants} = this.state;
        return (
            <article className="row">
                <article className="col-lg-12">
                    <table id="tbl-mensualidades" className="table table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre común</th>
                            <th>Nombre de Familia</th>
                            <th>Nombre Científico</th>
                            <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant, id) => {
                                return (<tr key = {id}>
                                    <td>{plant.id}</td>
                                    <td>{plant.common_name}</td>
                                    <td>{plant.family_name}</td>
                                    <td>{plant.scientific_name}</td>
                                    <td>{plant.cost}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </article>
            </article>
        );
    }
}

export default Content1;
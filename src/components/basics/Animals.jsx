function ListItem(props) {
    return <li>{props.animal}</li>;
}

function List(props) {
    if(!props.animals) {
        return <div>Oooops! there are no animals</div>;
    }

    if(props.animals.length === 0) {
        return <div>There are no animals in the list</div>;
    }

    const animalsList = props.animals.map((animal) => {
        return animal.startsWith('L') ? <ListItem key={animal} animal={animal} /> : null;
        // return animal.startsWith('L') && <ListItem key={animal} animal={animal} />;
    });

    return (
        <ul>
            {animalsList}
        </ul>
    );
}

function List2(props) {
    if(props.animals) {
        const animalsList = props.animals.map((animal) => {
            return animal.startsWith('L') ? <ListItem key={animal} animal={animal} /> : null;
            // return animal.startsWith('L') && <ListItem key={animal} animal={animal} />;
        });
    }

    return (
        <>
            {!props.animals ? (
                <div>Oooops! there are no animals</div>
            ) : props.animals.length > 0 ? (
                animalsList
            ) : (
                <div>There are no animals in the list</div>
            )}
        </>
    );
}

function List3(props) {
    let animalsList;
    
    if(props.animals) {
        animalsList = props.animals.map((animal) => {
            return animal.startsWith('L') ? <ListItem key={animal} animal={animal} /> : null;
            // return animal.startsWith('L') && <ListItem key={animal} animal={animal} />;
        });
    }

    return (
        <>
            {!props.animals && <div>Oooops! there are no animals</div>}
            {props.animals && props.animals.length > 0 && (animalsList)}
            {props.animals && props.animals.length === 0 && <div>There are no animals in the list</div>}
        </>
    );
}

function Animals() {
    const animals = ['Lion', 'Cow', 'Lizzard', 'Snake', 'Cat', 'Dog'];
    // const animals = null;
    // const animals = [];
    
    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}

export default Animals;
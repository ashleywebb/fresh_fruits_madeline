const React = require('react') 
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
               <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                   <fieldset>
                       <legend> Edit {fruit.name}</legend>
                       <label>
                           NAME: <input
                           type="text"
                           name="name"
                           placeholder="enter fruit name"
                           value={fruit.name}
                        />
                       </label>
                       <label>
                           COLOR: <input
                           type="text"
                           name="color"
                           placeholder="enter fruit name"
                           value={fruit.name}
                        />
                       </label>
                       <label>
                           READY TO EAT: { this.props.fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/>}
                       </label>
                   </fieldset>
                   <input type="submit" value = {`Edit ${fruit.name}`} />
               </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;
import { useState } from "react";

function Product() {
    const [name, setName] = useState('');
    const [testProduct, setTestProduct] = useState(false);

    const onSubmitForm = (e) => {
        console.log(name);
        console.log(testProduct);
        // onSubmit({name: name, testProduct});
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={testProduct}
                    onChange={(e) => setTestProduct(e.target.checked)}
                />
                Is a test product
            </label>
            <button type="submit">Save</button>
        </form>
    );
}

export default Product;
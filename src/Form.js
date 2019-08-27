import React from 'react'

class Form extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault();
        const term = this.inputForm.value;
        this.props.fetchImages(term)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    ref={input => this.inputForm = input}
                    placeholder="Enter your search term"
                />
                <button>SEARCH</button>
            </form>
        )
    }
}

export default Form;
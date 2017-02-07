'use babel';

import { CompositeDisposable } from 'atom';

export default {
    subscriptions: null,

    activate(state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'react-empty-component:insert': () => this.insert()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    /*
     *  I am really sorry for that indentation. But template literals are
     *  working just out of the box so, nice to see you here : 3
     */
    insert() {
        const emptyComponent = `import React, { Component } from 'react';

class NameYourComponentPlease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default NameYourComponentPlease;`;

        atom.workspace.getActiveTextEditor().insertText(emptyComponent);
    }
};

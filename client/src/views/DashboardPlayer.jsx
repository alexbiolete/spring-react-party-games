import React, { Component } from 'react';

class DashboardPlayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: '',
          button: 'Edit profile',
          handler: this.editProfileHandler,
          disabled: false,
          imgPath: ''
        }
      ]
    };
  }

  editProfileHandler = () => {
    console.log('Edit!');
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-gray-800 w-full p-4 rounded-xl">
            {'Placeholder'}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPlayer;
import React from 'react';
import Header from './Components/Header/Header';
import Picture from './Components/Picture/Picture';
import Paragraph from './Components/Paragraph/Paragraph';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header headerContent="Look at me, I know React" />

      <div className="paragraph-picture">

      <Picture src="https://www.elsetge.cat/myimg/f/9-92220_funny-pug-wallpaper-iphone-adorable-too-cute-pug.png" />
      
      <Paragraph 
      content1="Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. 
      Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre."

      content2="In every dinosaur bone you can find Chuck Norris' foot print, When the Boogeyman goes to sleep every night, 
      he checks his closet for Chuck Norris Chuck Norris can write and speak in Times New Roman Contrary to popular belief, Chuck Norris, 
      not the box jellyfish of northern Australia, is the most venomous creature on earth, Contrary to popular belief, America is not a democracy, 
      it is a Chucktatorship, The quickest way to a man's heart is with Chuck Norris' fist. When Chuck Norris sends in his taxes, he sends blank forms and 
      includes only a picture of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever Contrary to popular belief, 
      Chuck Norris, not the box jellyfish of northern Australia, is the most venomous creature on earth. Chuck Norris' hand is the only hand that can beat a
      Royal Flush Chuck Norris does not sleep. He waits. Chuck Norris does not get frostbite. Chuck Norris bites frost. Chuck Norris drives an ice cream truck covered in human skulls. 
      The chief export of Chuck Norris is Pain Chuck Norris can write a letter by using sign language."
      
      buttonContent="Click it!"
      />

      </div>
      
    </div>
  );
}

export default App;

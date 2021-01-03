import React from 'react';

const Scriptures = (props) => {
  const scriptures = [
    {code:'dc0135', text:'D&C 1:35 For I am no respecter of persons, and will that all men shall know that the day speedily cometh; the hour is not yet, but is nigh at hand, when peace shall be taken from the earth, and the devil shall have power over his own dominion.'},
    {code:'dc0136', text:'D&C 1:36 And also the Lord shall have power over his saints, and shall reign in their midst, and shall come down in judgment upon Idumea, or the world.'},
    {code:'dc4563', text:'D&C 45:63 Ye hear of wars in foreign lands; but, behold, I say unto you, they are nigh, even at your doors, and not many years hence ye shall hear of wars in your own lands.'},
    {code:'dc4564', text:'D&C 45:64 Wherefore I, the Lord, have said, gather ye out from the eastern lands, assemble ye yourselves together ye elders of my church; go ye forth into the western countries, call upon the inhabitants to repent, and inasmuch as they do repent, build up churches unto me.'},
    {code:'dc4565', text:'D&C 45:65 And with one heart and with one mind, gather up your riches that ye may purchase an inheritance which shall hereafter be appointed unto you.'},
    {code:'dc4566', text:'D&C 45:66 And it shall be called the New Jerusalem, a land of peace, a city of refuge, a place of safety for the saints of the Most High God;'},
    {code:'dc4567', text:'D&C 45:67 And the glory of the Lord shall be there, and the terror of the Lord also shall be there, insomuch that the wicked will not come unto it, and it shall be called Zion.'},
    {code:'dc4568', text:'D&C 45:68 And it shall come to pass among the wicked, that every man that will not take his sword against his neighbor must needs flee unto Zion for safety.'},
    {code:'dc4569', text:'D&C 45:69 And there shall be gathered unto it out of every nation under heaven; and it shall be the only people that shall not be at war one with another.'},
    {code:'dc4570', text:'D&C 45:70 And it shall be said among the wicked: Let us not go up to battle against Zion, for the inhabitants of Zion are terrible; wherefore we cannot stand.'},
    {code:'dc4571', text:'D&C 45:71 And it shall come to pass that the righteous shall be gathered out from among all nations, and shall come to Zion, singing with songs of everlasting joy.'},
    {code:'dc4572', text:'D&C 45:72 And now I say unto you, keep these things from going abroad unto the world until it is expedient in me, that ye may accomplish this work in the eyes of the people, and in the eyes of your enemies, that they may not know your works until ye have accomplished the thing which I have commanded you;'},
    {code:'dc4573', text:'D&C 45:73 That when they shall know it, that they may consider these things.'},
    {code:'dc4574', text:'D&C 45:74 For when the Lord shall appear he shall be terrible unto them, that fear may seize upon them, and they shall stand afar off and tremble.'},
    {code:'dc4575', text:'D&C 45:75 And all nations shall be afraid because of the terror of the Lord, and the power of his might. Even so. Amen.'},
  ]
  const returnScripture = scriptures.map(item =>{
    if(item.code === props.code){
      return(
        <p>
          {item.text}
        </p>
      );
    }

  });
    return (
      <div>
        <blockquote>{returnScripture}</blockquote>
      </div>
    );
}

export default Scriptures;

import React from 'react';

const Scriptures = (props) => {
  const scriptures = [
    {code:'bm010101', chap:'ne1-1', text:'NE1 1:1 I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.'},
    {code:'bm010102', chap:'ne1-1', text:'NE1 1:2 Yea, I make a record in the language of my father, which consists of the learning of the Jews and the language of the Egyptians.'},
    {code:'bm010103', chap:'ne1-1', text:'NE1 1:3 And I know that the record which I make is true; and I make it with mine own hand; and I make it according to my knowledge.'},
    {code:'bm010104', chap:'ne1-1', text:'NE1 1:4 For it came to pass in the commencement of the first year of the reign of Zedekiah, king of Judah, (my father, Lehi, having dwelt at Jerusalem in all his days); and in that same year there came many prophets, prophesying unto the people that they must repent, or the great city Jerusalem must be destroyed.'},
    {code:'bm010105', chap:'ne1-1', text:'NE1 1:5 Wherefore it came to pass that my father, Lehi, as he went forth prayed unto the Lord, yea, even with all his heart, in behalf of his people.'},
    {code:'bm010106', chap:'ne1-1', text:'NE1 1:6 And it came to pass as he prayed unto the Lord, there came a pillar of fire and dwelt upon a rock before him; and he saw and heard much; and because of the things which he saw and heard he did quake and tremble exceedingly.'},
    {code:'bm010107', chap:'ne1-1', text:'NE1 1:7 And it came to pass that he returned to his own house at Jerusalem; and he cast himself upon his bed, being overcome with the Spirit and the things which he had seen.'},
    {code:'bm010108', chap:'ne1-1', text:'NE1 1:8 And being thus overcome with the Spirit, he was carried away in a vision, even that he saw the heavens open, and he thought he saw God sitting upon his throne, surrounded with numberless concourses of angels in the attitude of singing and praising their God.'},
    {code:'bm010109', chap:'ne1-1', text:'NE1 1:9 And it came to pass that he saw One descending out of the midst of heaven, and he beheld that his luster was above that of the sun at noon-day.'},
    {code:'bm010110', chap:'ne1-1', text:'NE1 1:10 And he also saw twelve others following him, and their brightness did exceed that of the stars in the firmament.'},
    {code:'bm010111', chap:'ne1-1', text:'NE1 1:11 And they came down and went forth upon the face of the earth; and the first came and stood before my father, and gave unto him a book, and bade him that he should read.'},
    {code:'bm010112', chap:'ne1-1', text:'NE1 1:12 And it came to pass that as he read, he was filled with the Spirit of the Lord.'},
    {code:'bm010113', chap:'ne1-1', text:'NE1 1:13 And he read, saying: Wo, wo, unto Jerusalem, for I have seen thine abominations! Yea, and many things did my father read concerning Jerusalem--that it should be destroyed, and the inhabitants thereof; many should perish by the sword, and many should be carried away captive into Babylon.'},
    {code:'bm010114', chap:'ne1-1', text:'NE1 1:14 And it came to pass that when my father had read and seen many great and marvelous things, he did exclaim many things unto the Lord; such as: Great and marvelous are thy works, O Lord God Almighty! Thy throne is high in the heavens, and thy power, and goodness, and mercy are over all the inhabitants of the earth; and, because thou art merciful, thou wilt not suffer those who come unto thee that they shall perish!'},
    {code:'bm010115', chap:'ne1-1', text:'NE1 1:15 And after this manner was the language of my father in the praising of his God; for his soul did rejoice, and his whole heart was filled, because of the things which he had seen, yea, which the Lord had shown unto him.'},
    {code:'bm010116', chap:'ne1-1', text:'NE1 1:16 And now I, Nephi, do not make a full account of the things which my father hath written, for he hath written many things which he saw in visions and in dreams; and he also hath written many things which he prophesied and spake unto his children, of which I shall not make a full account.'},
    {code:'bm010117', chap:'ne1-1', text:'NE1 1:17 But I shall make an account of my proceedings in my days. Behold, I make an abridgment of the record of my father, upon plates which I have made with mine own hands; wherefore, after I have abridged the record of my father then will I make an account of mine own life.'},
    {code:'bm010118', chap:'ne1-1', text:'NE1 1:18 Therefore, I would that ye should know, that after the Lord had shown so many marvelous things unto my father, Lehi, yea, concerning the destruction of Jerusalem, behold he went forth among the people, and began to prophesy and to declare unto them concerning the things which he had both seen and heard.'},
    {code:'bm010119', chap:'ne1-1', text:'NE1 1:19 And it came to pass that the Jews did mock him because of the things which he testified of them; for he truly testified of their wickedness and their abominations; and he testified that the things which he saw and heard, and also the things which he read in the book, manifested plainly of the coming of a Messiah, and also the redemption of the world.'},
    {code:'bm010120', chap:'ne1-1', text:'NE1 1:20 And when the Jews heard these things they were angry with him; yea, even as with the prophets of old, whom they had cast out, and stoned, and slain; and they also sought his life, that they might take it away. But behold, I, Nephi, will show unto you that the tender mercies of the Lord are over all those whom he hath chosen, because of their faith, to make them mighty even unto the power of deliverance.'},
    {code:'bm010201', chap:'ne1-2', text:'NE1 2:1 For behold, it came to pass that the Lord spake unto my father, yea, even in a dream, and said unto him: Blessed art thou Lehi, because of the things which thou hast done; and because thou hast been faithful and declared unto this people the things which I commanded thee, behold, they seek to take away thy life.'},
    {code:'bm010202', chap:'ne1-2', text:'NE1 2:2 And it came to pass that the Lord commanded my father, even in a dream, that he should take his family and depart into the wilderness.'},
    {code:'bm010203', chap:'ne1-2', text:'NE1 2:3 And it came to pass that he was obedient unto the word of the Lord, wherefore he did as the Lord commanded him.'},
    {code:'bm010204', chap:'ne1-2', text:'NE1 2:4 And it came to pass that he departed into the wilderness. And he left his house, and the land of his inheritance, and his gold, and his silver, and his precious things, and took nothing with him, save it were his family, and provisions, and tents, and departed into the wilderness.'},
    {code:'bm010205', chap:'ne1-2', text:'NE1 2:5 And he came down by the borders near the shore of the Red Sea; and he traveled in the wilderness in the borders which are nearer the Red Sea; and he did travel in the wilderness with his family, which consisted of my mother, Sariah, and my elder brothers, who were Laman, Lemuel, and Sam.'},
    {code:'bm010206', chap:'ne1-2', text:'NE1 2:6 And it came to pass that when he had traveled three days in the wilderness, he pitched his tent in a valley by the side of a river of water.'},
    {code:'bm010207', chap:'ne1-2', text:'NE1 2:7 And it came to pass that he built an altar of stones, and made an offering unto the Lord, and gave thanks unto the Lord our God.'},
    {code:'bm010208', chap:'ne1-2', text:'NE1 2:8 And it came to pass that he called the name of the river, Laman, and it emptied into the Red Sea; and the valley was in the borders near the mouth thereof.'},
    {code:'bm010209', chap:'ne1-2', text:'NE1 2:9 And when my father saw that the waters of the river emptied into the fountain of the Red Sea, he spake unto Laman, saying: O that thou mightest be like unto this river, continually running into the fountain of all righteousness!'},
    {code:'bm010210', chap:'ne1-2', text:'NE1 2:10 And he also spake unto Lemuel: O that thou mightest be like unto this valley, firm and steadfast, and immovable in keeping the commandments of the Lord!'},
    {code:'bm010211', chap:'ne1-2', text:'NE1 2:11 Now this he spake because of the stiffneckedness of Laman and Lemuel; for behold they did murmur in many things against their father, because he was a visionary man, and had led them out of the land of Jerusalem, to leave the land of their inheritance, and their gold, and their silver, and their precious things, to perish in the wilderness. And this they said he had done because of the foolish imaginations of his heart.'},
    {code:'bm010212', chap:'ne1-2', text:'NE1 2:12 And thus Laman and Lemuel, being the eldest, did murmur against their father. And they did murmur because they knew not the dealings of that God who had created them.'},
    {code:'bm010213', chap:'ne1-2', text:'NE1 2:13 Neither did they believe that Jerusalem, that great city, could be destroyed according to the words of the prophets. And they were like unto the Jews who were at Jerusalem, who sought to take away the life of my father.'},
    {code:'bm010214', chap:'ne1-2', text:'NE1 2:14 And it came to pass that my father did speak unto them in the valley of Lemuel, with power, being filled with the Spirit, until their frames did shake before him. And he did confound them, that they durst not utter against him; wherefore, they did as he commanded them.'},
    {code:'bm010215', chap:'ne1-2', text:'NE1 2:15 And my father dwelt in a tent.'},
    {code:'bm010216', chap:'ne1-2', text:'NE1 2:16 And it came to pass that I, Nephi, being exceedingly young, nevertheless being large in stature, and also having great desires to know of the mysteries of God, wherefore, I did cry unto the Lord; and behold he did visit me, and did soften my heart that I did believe all the words which had been spoken by my father; wherefore, I did not rebel against him like unto my brothers.'},
    {code:'bm010217', chap:'ne1-2', text:'NE1 2:17 And I spake unto Sam, making known unto him the things which the Lord had manifested unto me by his Holy Spirit. And it came to pass that he believed in my words.'},
    {code:'bm010218', chap:'ne1-2', text:'NE1 2:18 But, behold, Laman and Lemuel would not hearken unto my words; and being grieved because of the hardness of their hearts I cried unto the Lord for them.'},
    {code:'bm010219', chap:'ne1-2', text:'NE1 2:19 And it came to pass that the Lord spake unto me, saying: Blessed art thou, Nephi, because of thy faith, for thou hast sought me diligently, with lowliness of heart.'},
    {code:'bm010220', chap:'ne1-2', text:'NE1 2:20 And inasmuch as ye shall keep my commandments, ye shall prosper, and shall be led to a land of promise; yea, even a land which I have prepared for you; yea, a land which is choice above all other lands.'},
    {code:'bm010221', chap:'ne1-2', text:'NE1 2:21 And inasmuch as thy brethren shall rebel against thee, they shall be cut off from the presence of the Lord.'},
    {code:'bm010222', chap:'ne1-2', text:'NE1 2:22 And inasmuch as thou shalt keep my commandments, thou shalt be made a ruler and a teacher over thy brethren.'},
    {code:'bm010223', chap:'ne1-2', text:'NE1 2:23 For behold, in that day that they shall rebel against me, I will curse them even with a sore curse, and they shall have no power over thy seed except they shall rebel against me also.'},
    {code:'bm010224', chap:'ne1-2', text:'NE1 2:24 And if it so be that they rebel against me, they shall be a scourge unto thy seed, to stir them up in the ways of remembrance.'},
    {code:'bm010301', chap:'ne1-3', text:'NE1 3:1 And it came to pass that I, Nephi, returned from speaking with the Lord, to the tent of my father.'},
    {code:'bm010302', chap:'ne1-3', text:'NE1 3:2 And it came to pass that he spake unto me, saying: Behold I have dreamed a dream, in the which the Lord hath commanded me that thou and thy brethren shall return to Jerusalem.'},
    {code:'bm010303', chap:'ne1-3', text:'NE1 3:3 For behold, Laban hath the record of the Jews and also a genealogy of my forefathers, and they are engraven upon plates of brass.'},
    {code:'bm010304', chap:'ne1-3', text:'NE1 3:4 Wherefore, the Lord hath commanded me that thou and thy brothers should go unto the house of Laban, and seek the records, and bring them down hither into the wilderness.'},
    {code:'bm010305', chap:'ne1-3', text:'NE1 3:5 And now, behold thy brothers murmur, saying it is a hard thing which I have required of them; but behold I have not required it of them, but it is a commandment of the Lord.'},
    {code:'bm010306', chap:'ne1-3', text:'NE1 3:6 Therefore go, my son, and thou shalt be favored of the Lord, because thou hast not murmured.'},
    {code:'bm010307', chap:'ne1-3', text:'NE1 3:7 And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.'},
    {code:'bm010308', chap:'ne1-3', text:'NE1 3:8 And it came to pass that when my father had heard these words he was exceedingly glad, for he knew that I had been blessed of the Lord.'},
    {code:'bm010309', chap:'ne1-3', text:'NE1 3:9 And I, Nephi, and my brethren took our journey in the wilderness, with our tents, to go up to the land of Jerusalem.'},
    {code:'bm010310', chap:'ne1-3', text:'NE1 3:10 And it came to pass that when we had gone up to the land of Jerusalem, I and my brethren did consult one with another.'},
    {code:'bm010311', chap:'ne1-3', text:'NE1 3:11 And we cast lots--who of us should go in unto the house of Laban. And it came to pass that the lot fell upon Laman; and Laman went in unto the house of Laban, and he talked with him as he sat in his house.'},
    {code:'bm010312', chap:'ne1-3', text:'NE1 3:12 And he desired of Laban the records which were engraven upon the plates of brass, which contained the genealogy of my father.'},
    {code:'bm010313', chap:'ne1-3', text:'NE1 3:13 And behold, it came to pass that Laban was angry, and thrust him out from his presence; and he would not that he should have the records. Wherefore, he said unto him: Behold thou art a robber, and I will slay thee.'},
    {code:'bm010314', chap:'ne1-3', text:'NE1 3:14 But Laman fled out of his presence, and told the things which Laban had done, unto us. And we began to be exceedingly sorrowful, and my brethren were about to return unto my father in the wilderness.'},
    {code:'bm010315', chap:'ne1-3', text:'NE1 3:15 But behold I said unto them that: As the Lord liveth, and as we live, we will not go down unto our father in the wilderness until we have accomplished the thing which the Lord hath commanded us.'},
    {code:'bm010316', chap:'ne1-3', text:'NE1 3:16 Wherefore, let us be faithful in keeping the commandments of the Lord; therefore let us go down to the land of our fathers inheritance, for behold he left gold and silver, and all manner of riches. And all this he hath done because of the commandments of the Lord.'},
    {code:'bm010317', chap:'ne1-3', text:'NE1 3:17 For he knew that Jerusalem must be destroyed, because of the wickedness of the people.'},
    {code:'bm010318', chap:'ne1-3', text:'NE1 3:18 For behold, they have rejected the words of the prophets. Wherefore, if my father should dwell in the land after he hath been commanded to flee out of the land, behold, he would also perish. Wherefore, it must needs be that he flee out of the land.'},
    {code:'bm010319', chap:'ne1-3', text:'NE1 3:19 And behold, it is wisdom in God that we should obtain these records, that we may preserve unto our children the language of our fathers;'},
    {code:'bm010320', chap:'ne1-3', text:'NE1 3:20 And also that we may preserve unto them the words which have been spoken by the mouth of all the holy prophets, which have been delivered unto them by the Spirit and power of God, since the world began, even down unto this present time.'},
    {code:'bm010321', chap:'ne1-3', text:'NE1 3:21 And it came to pass that after this manner of language did I persuade my brethren, that they might be faithful in keeping the commandments of God.'},
    {code:'bm010322', chap:'ne1-3', text:'NE1 3:22 And it came to pass that we went down to the land of our inheritance, and we did gather together our gold, and our silver, and our precious things.'},
    {code:'bm010323', chap:'ne1-3', text:'NE1 3:23 And after we had gathered these things together, we went up again unto the house of Laban.'},
    {code:'bm010324', chap:'ne1-3', text:'NE1 3:24 And it came to pass that we went in unto Laban, and desired him that he would give unto us the records which were engraven upon the plates of brass, for which we would give unto him our gold, and our silver, and all our precious things.'},
    {code:'bm010325', chap:'ne1-3', text:'NE1 3:25 And it came to pass that when Laban saw our property, and that it was exceedingly great, he did lust after it, insomuch that he thrust us out, and sent his servants to slay us, that he might obtain our property.'},
    {code:'bm010326', chap:'ne1-3', text:'NE1 3:26 And it came to pass that we did flee before the servants of Laban, and we were obliged to leave behind our property, and it fell into the hands of Laban.'},
    {code:'bm010327', chap:'ne1-3', text:'NE1 3:27 And it came to pass that we fled into the wilderness, and the servants of Laban did not overtake us, and we hid ourselves in the cavity of a rock.'},
    {code:'bm010328', chap:'ne1-3', text:'NE1 3:28 And it came to pass that Laman was angry with me, and also with my father; and also was Lemuel, for he hearkened unto the words of Laman. Wherefore Laman and Lemuel did speak many hard words unto us, their younger brothers, and they did smite us even with a rod.'},
    {code:'bm010329', chap:'ne1-3', text:'NE1 3:29 And it came to pass as they smote us with a rod, behold, an angel of the Lord came and stood before them, and he spake unto them, saying: Why do ye smite your younger brother with a rod? Know ye not that the Lord hath chosen him to be a ruler over you, and this because of your iniquities? Behold ye shall go up to Jerusalem again, and the Lord will deliver Laban into your hands.'},
    {code:'bm010330', chap:'ne1-3', text:'NE1 3:30 And after the angel had spoken unto us, he departed.'},
    {code:'bm010331', chap:'ne1-3', text:'NE1 3:31 And after the angel had departed, Laman and Lemuel again began to murmur, saying: How is it possible that the Lord will deliver Laban into our hands? Behold, he is a mighty man, and he can command fifty, yea, even he can slay fifty; then why not us?'},
    {code:'bm010401', chap:'ne1-4', text:'NE1 4:1 And it came to pass that I spake unto my brethren, saying: Let us go up again unto Jerusalem, and let us be faithful in keeping the commandments of the Lord; for behold he is mightier than all the earth, then why not mightier than Laban and his fifty, yea, or even than his tens of thousands?'},
    {code:'bm010402', chap:'ne1-4', text:'NE1 4:2 Therefore let us go up; let us be strong like unto Moses; for he truly spake unto the waters of the Red Sea and they divided hither and thither, and our fathers came through, out of captivity, on dry ground, and the armies of Pharaoh did follow and were drowned in the waters of the Red Sea.'},
    {code:'bm010403', chap:'ne1-4', text:'NE1 4:3 Now behold ye know that this is true; and ye also know that an angel hath spoken unto you; wherefore can ye doubt? Let us go up; the Lord is able to deliver us, even as our fathers, and to destroy Laban, even as the Egyptians.'},
    {code:'bm010404', chap:'ne1-4', text:'NE1 4:4 Now when I had spoken these words, they were yet wroth, and did still continue to murmur; nevertheless they did follow me up until we came without the walls of Jerusalem.'},
    {code:'bm010405', chap:'ne1-4', text:'NE1 4:5 And it was by night; and I caused that they should hide themselves without the walls. And after they had hid themselves, I, Nephi, crept into the city and went forth towards the house of Laban.'},
    {code:'bm010406', chap:'ne1-4', text:'NE1 4:6 And I was led by the Spirit, not knowing beforehand the things which I should do.'},
    {code:'bm010407', chap:'ne1-4', text:'NE1 4:7 Nevertheless I went forth, and as I came near unto the house of Laban I beheld a man, and he had fallen to the earth before me, for he was drunken with wine.'},
    {code:'bm010408', chap:'ne1-4', text:'NE1 4:8 And when I came to him I found that it was Laban.'},
    {code:'bm010409', chap:'ne1-4', text:'NE1 4:9 And I beheld his sword, and I drew it forth from the sheath thereof; and the hilt thereof was of pure gold, and the workmanship thereof was exceedingly fine, and I saw that the blade thereof was of the most precious steel.'},
    {code:'bm010410', chap:'ne1-4', text:'NE1 4:10 And it came to pass that I was constrained by the Spirit that I should kill Laban; but I said in my heart: Never at any time have I shed the blood of man. And I shrunk and would that I might not slay him.'},
    {code:'bm010411', chap:'ne1-4', text:'NE1 4:11 And the Spirit said unto me again: Behold the Lord hath delivered him into thy hands. Yea, and I also knew that he had sought to take away mine own life; yea, and he would not hearken unto the commandments of the Lord; and he also had taken away our property.'},
    {code:'bm010412', chap:'ne1-4', text:'NE1 4:12 And it came to pass that the Spirit said unto me again: Slay him, for the Lord hath delivered him into thy hands;'},
    {code:'bm010413', chap:'ne1-4', text:'NE1 4:13 Behold the Lord slayeth the wicked to bring forth his righteous purposes. It is better that one man should perish than that a nation should dwindle and perish in unbelief.'},
    {code:'bm010414', chap:'ne1-4', text:'NE1 4:14 And now, when I, Nephi, had heard these words, I remembered the words of the Lord which he spake unto me in the wilderness, saying that: Inasmuch as thy seed shall keep my commandments, they shall prosper in the land of promise.'},
    {code:'bm010415', chap:'ne1-4', text:'NE1 4:15 Yea, and I also thought that they could not keep the commandments of the Lord according to the law of Moses, save they should have the law.'},
    {code:'bm010416', chap:'ne1-4', text:'NE1 4:16 And I also knew that the law was engraven upon the plates of brass.'},
    {code:'bm010417', chap:'ne1-4', text:'NE1 4:17 And again, I knew that the Lord had delivered Laban into my hands for this cause--that I might obtain the records according to his commandments.'},
    {code:'bm010418', chap:'ne1-4', text:'NE1 4:18 Therefore I did obey the voice of the Spirit, and took Laban by the hair of the head, and I smote off his head with his own sword.'},
    {code:'bm010419', chap:'ne1-4', text:'NE1 4:19 And after I had smitten off his head with his own sword, I took the garments of Laban and put them upon mine own body; yea, even every whit; and I did gird on his armor about my loins.'},
    {code:'bm010420', chap:'ne1-4', text:'NE1 4:20 And after I had done this, I went forth unto the treasury of Laban. And as I went forth towards the treasury of Laban, behold, I saw the servant of Laban who had the keys of the treasury. And I commanded him in the voice of Laban, that he should go with me into the treasury.'},
    {code:'bm010421', chap:'ne1-4', text:'NE1 4:21 And he supposed me to be his master, Laban, for he beheld the garments and also the sword girded about my loins.'},
    {code:'bm010422', chap:'ne1-4', text:'NE1 4:22 And he spake unto me concerning the elders of the Jews, he knowing that his master, Laban, had been out by night among them.'},
    {code:'bm010423', chap:'ne1-4', text:'NE1 4:23 And I spake unto him as if it had been Laban.'},
    {code:'bm010424', chap:'ne1-4', text:'NE1 4:24 And I also spake unto him that I should carry the engravings, which were upon the plates of brass, to my elder brethren, who were without the walls.'},
    {code:'bm010425', chap:'ne1-4', text:'NE1 4:25 And I also bade him that he should follow me.'},
    {code:'bm010426', chap:'ne1-4', text:'NE1 4:26 And he, supposing that I spake of the brethren of the church, and that I was truly that Laban whom I had slain, wherefore he did follow me.'},
    {code:'bm010427', chap:'ne1-4', text:'NE1 4:27 And he spake unto me many times concerning the elders of the Jews, as I went forth unto my brethren, who were without the walls.'},
    {code:'bm010428', chap:'ne1-4', text:'NE1 4:28 And it came to pass that when Laman saw me he was exceedingly frightened, and also Lemuel and Sam. And they fled from before my presence; for they supposed it was Laban, and that he had slain me and had sought to take away their lives also.'},
    {code:'bm010429', chap:'ne1-4', text:'NE1 4:29 And it came to pass that I called after them, and they did hear me; wherefore they did cease to flee from my presence.'},
    {code:'bm010430', chap:'ne1-4', text:'NE1 4:30 And it came to pass that when the servant of Laban beheld my brethren he began to tremble, and was about to flee from before me and return to the city of Jerusalem.'},
    {code:'bm010431', chap:'ne1-4', text:'NE1 4:31 And now I, Nephi, being a man large in stature, and also having received much strength of the Lord, therefore I did seize upon the servant of Laban, and held him, that he should not flee.'},
    {code:'bm010432', chap:'ne1-4', text:'NE1 4:32 And it came to pass that I spake with him, that if he would hearken unto my words, as the Lord liveth, and as I live, even so that if he would hearken unto our words, we would spare his life.'},
    {code:'bm010433', chap:'ne1-4', text:'NE1 4:33 And I spake unto him, even with an oath, that he need not fear; that he should be a free man like unto us if he would go down in the wilderness with us.'},
    {code:'bm010434', chap:'ne1-4', text:'NE1 4:34 And I also spake unto him, saying: Surely the Lord hath commanded us to do this thing; and shall we not be diligent in keeping the commandments of the Lord? Therefore, if thou wilt go down into the wilderness to my father thou shalt have place with us.'},
    {code:'bm010435', chap:'ne1-4', text:'NE1 4:35 And it came to pass that Zoram did take courage at the words which I spake. Now Zoram was the name of the servant; and he promised that he would go down into the wilderness unto our father. Yea, and he also made an oath unto us that he would tarry with us from that time forth.'},
    {code:'bm010436', chap:'ne1-4', text:'NE1 4:36 Now we were desirous that he should tarry with us for this cause, that the Jews might not know concerning our flight into the wilderness, lest they should pursue us and destroy us.'},
    {code:'bm010437', chap:'ne1-4', text:'NE1 4:37 And it came to pass that when Zoram had made an oath unto us, our fears did cease concerning him.'},
    {code:'bm010438', chap:'ne1-4', text:'NE1 4:38 And it came to pass that we took the plates of brass and the servant of Laban, and departed into the wilderness, and journeyed unto the tent of our father.'},

    {code:'dc0101', chap:'dc1', text:'D&C 1:1 Hearken, O ye people of my church, saith the voice of him who dwells on high, and whose eyes are upon all men; yea, verily I say: Hearken ye people from afar; and ye that are upon the islands of the sea, listen together.'},
    {code:'dc0102', chap:'dc1', text:'D&C 1:2 For verily the voice of the Lord is unto all men, and there is none to escape; and there is no eye that shall not see, neither ear that shall not hear, neither heart that shall not be penetrated.'},
    {code:'dc0103', chap:'dc1', text:'D&C 1:3 And the rebellious shall be pierced with much sorrow; for their iniquities shall be spoken upon the housetops, and their secret acts shall be revealed.'},
    {code:'dc0104', chap:'dc1', text:'D&C 1:4 And the voice of warning shall be unto all people, by the mouths of my disciples, whom I have chosen in these last days.'},
    {code:'dc0105', chap:'dc1', text:'D&C 1:5 And they shall go forth and none shall stay them, for I the Lord have commanded them.'},
    {code:'dc0106', chap:'dc1', text:'D&C 1:6 Behold, this is mine authority, and the authority of my servants, and my preface unto the book of my commandments, which I have given them to publish unto you, O inhabitants of the earth.'},
    {code:'dc0107', chap:'dc1', text:'D&C 1:7 Wherefore, fear and tremble, O ye people, for what I the Lord have decreed in them shall be fulfilled.'},
    {code:'dc0108', chap:'dc1', text:'D&C 1:8 And verily I say unto you, that they who go forth, bearing these tidings unto the inhabitants of the earth, to them is power given to seal both on earth and in heaven, the unbelieving and rebellious;'},
    {code:'dc0109', chap:'dc1', text:'D&C 1:9 Yea, verily, to seal them up unto the day when the wrath of God shall be poured out upon the wicked without measure--'},
    {code:'dc0110', chap:'dc1', text:'D&C 1:10 Unto the day when the Lord shall come to recompense unto every man according to his work, and measure to every man according to the measure which he has measured to his fellow man.'},
    {code:'dc0111', chap:'dc1', text:'D&C 1:11 Wherefore the voice of the Lord is unto the ends of the earth, that all that will hear may hear:'},
    {code:'dc0112', chap:'dc1', text:'D&C 1:12 Prepare ye, prepare ye for that which is to come, for the Lord is nigh;'},
    {code:'dc0113', chap:'dc1', text:'D&C 1:13 And the anger of the Lord is kindled, and his sword is bathed in heaven, and it shall fall upon the inhabitants of the earth.'},
    {code:'dc0114', chap:'dc1', text:'D&C 1:14 And the arm of the Lord shall be revealed; and the day cometh that they who will not hear the voice of the Lord, neither the voice of his servants, neither give heed to the words of the prophets and apostles, shall be cut off from among the people;'},
    {code:'dc0115', chap:'dc1', text:'D&C 1:15 For they have strayed from mine ordinances, and have broken mine everlasting covenant;'},
    {code:'dc0116', chap:'dc1', text:'D&C 1:16 They seek not the Lord to establish his righteousness, but every man walketh in his own way, and after the image of his own God, whose image is in the likeness of the world, and whose substance is that of an idol, which waxeth old and shall perish in Babylon, even Babylon the great, which shall fall.'},
    {code:'dc0117', chap:'dc1', text:'D&C 1:17 Wherefore, I the Lord, knowing the calamity which should come upon the inhabitants of the earth, called upon my servant Joseph Smith, Jun., and spake unto him from heaven, and gave him commandments;'},
    {code:'dc0118', chap:'dc1', text:'D&C 1:18 And also gave commandments to others, that they should proclaim these things unto the world; and all this that it might be fulfilled, which was written by the prophets--'},
    {code:'dc0119', chap:'dc1', text:'D&C 1:19 The weak things of the world shall come forth and break down the mighty and strong ones, that man should not counsel his fellow man, neither trust in the arm of flesh--'},
    {code:'dc0120', chap:'dc1', text:'D&C 1:20 But that every man might speak in the name of God the Lord, even the Savior of the world;'},
    {code:'dc0121', chap:'dc1', text:'D&C 1:21 That faith also might increase in the earth;'},
    {code:'dc0122', chap:'dc1', text:'D&C 1:22 That mine everlasting covenant might be established;'},
    {code:'dc0123', chap:'dc1', text:'D&C 1:23 That the fulness of my gospel might be proclaimed by the weak and the simple unto the ends of the world, and before kings and rulers.'},
    {code:'dc0124', chap:'dc1', text:'D&C 1:24 Behold, I am God and have spoken it; these commandments are of me, and were given unto my servants in their weakness, after the manner of their language, that they might come to understanding.'},
    {code:'dc0125', chap:'dc1', text:'D&C 1:25 And inasmuch as they erred it might be made known;'},
    {code:'dc0126', chap:'dc1', text:'D&C 1:26 And inasmuch as they sought wisdom they might be instructed;'},
    {code:'dc0127', chap:'dc1', text:'D&C 1:27 And inasmuch as they sinned they might be chastened, that they might repent;'},
    {code:'dc0128', chap:'dc1', text:'D&C 1:28 And inasmuch as they were humble they might be made strong, and blessed from on high, and receive knowledge from time to time.'},
    {code:'dc0129', chap:'dc1', text:'D&C 1:29 And after having received the record of the Nephites, yea, even my servant Joseph Smith, Jun., might have power to translate through the mercy of God, by the power of God, the Book of Mormon.'},
    {code:'dc0130', chap:'dc1', text:'D&C 1:30 And also those to whom these commandments were given, might have power to lay the foundation of this church, and to bring it forth out of obscurity and out of darkness, the only true and living church upon the face of the whole earth, with which I, the Lord, am well pleased, speaking unto the church collectively and not individually--'},
    {code:'dc0131', chap:'dc1', text:'D&C 1:31 For I the Lord cannot look upon sin with the least degree of allowance;'},
    {code:'dc0132', chap:'dc1', text:'D&C 1:32 Nevertheless, he that repents and does the commandments of the Lord shall be forgiven;'},
    {code:'dc0133', chap:'dc1', text:'D&C 1:33 And he that repents not, from him shall be taken even the light which he has received; for my Spirit shall not always strive with man, saith the Lord of Hosts.'},
    {code:'dc0134', chap:'dc1', text:'D&C 1:34 And again, verily I say unto you, O inhabitants of the earth: I the Lord am willing to make these things known unto all flesh;'},
    {code:'dc0135', chap:'dc1', text:'D&C 1:35 For I am no respecter of persons, and will that all men shall know that the day speedily cometh; the hour is not yet, but is nigh at hand, when peace shall be taken from the earth, and the devil shall have power over his own dominion.'},
    {code:'dc0136', chap:'dc1', text:'D&C 1:36 And also the Lord shall have power over his saints, and shall reign in their midst, and shall come down in judgment upon Idumea, or the world.'},
    {code:'dc0137', chap:'dc1', text:'D&C 1:37 Search these commandments, for they are true and faithful, and the prophecies and promises which are in them shall all be fulfilled.'},
    {code:'dc0138', chap:'dc1', text:'D&C 1:38 What I the Lord have spoken, I have spoken, and I excuse not myself; and though the heavens and the earth pass away, my word shall not pass away, but shall all be fulfilled, whether by mine own voice or by the voice of my servants, it is the same.'},
    {code:'dc0139', chap:'dc1', text:'D&C 1:39 For behold, and lo, the Lord is God, and the Spirit beareth record, and the record is true, and the truth abideth forever and ever. Amen.'},
    {code:'dc0201', chap:'dc2', text:'D&C 2:1 Behold, I will reveal unto you the Priesthood, by the hand of Elijah the prophet, before the coming of the great and dreadful day of the Lord.'},
    {code:'dc0202', chap:'dc2', text:'D&C 2:2 And he shall plant in the hearts of the children the promises made to the fathers, and the hearts of the children shall turn to their fathers.'},
    {code:'dc0203', chap:'dc2', text:'D&C 2:3 If it were not so, the whole earth would be utterly wasted at his coming.'},

    {code:'dc0401', chap:'dc4', text:'D&C 4:1 Now behold, a marvelous work is about to come forth among the children of men.'},
    {code:'dc0402', chap:'dc4', text:'D&C 4:2 Therefore, O ye that embark in the service of God, see that ye serve him with all your heart, might, mind and strength, that ye may stand blameless before God at the last day.'},
    {code:'dc0403', chap:'dc4', text:'D&C 4:3 Therefore, if ye have desires to serve God ye are called to the work;'},
    {code:'dc0404', chap:'dc4', text:'D&C 4:4 For behold the field is white already to harvest; and lo, he that thrusteth in his sickle with his might, the same layeth up in store that he perisheth not, but bringeth salvation to his soul;'},
    {code:'dc0405', chap:'dc4', text:'D&C 4:5 And faith, hope, charity and love, with an eye single to the glory of God, qualify him for the work.'},
    {code:'dc0406', chap:'dc4', text:'D&C 4:6 Remember faith, virtue, knowledge, temperance, patience, brotherly kindness, godliness, charity, humility, diligence.'},
    {code:'dc0407', chap:'dc4', text:'D&C 4:7 Ask, and ye shall receive; knock, and it shall be opened unto you. Amen.'},
    {code:'dc4563', chap:'dc45', text:'D&C 45:63 Ye hear of wars in foreign lands; but, behold, I say unto you, they are nigh, even at your doors, and not many years hence ye shall hear of wars in your own lands.'},
    {code:'dc4564', chap:'dc45', text:'D&C 45:64 Wherefore I, the Lord, have said, gather ye out from the eastern lands, assemble ye yourselves together ye elders of my church; go ye forth into the western countries, call upon the inhabitants to repent, and inasmuch as they do repent, build up churches unto me.'},
    {code:'dc4565', chap:'dc45', text:'D&C 45:65 And with one heart and with one mind, gather up your riches that ye may purchase an inheritance which shall hereafter be appointed unto you.'},
    {code:'dc4566', chap:'dc45', text:'D&C 45:66 And it shall be called the New Jerusalem, a land of peace, a city of refuge, a place of safety for the saints of the Most High God;'},
    {code:'dc4567', chap:'dc45', text:'D&C 45:67 And the glory of the Lord shall be there, and the terror of the Lord also shall be there, insomuch that the wicked will not come unto it, and it shall be called Zion.'},
    {code:'dc4568', chap:'dc45', text:'D&C 45:68 And it shall come to pass among the wicked, that every man that will not take his sword against his neighbor must needs flee unto Zion for safety.'},
    {code:'dc4569', chap:'dc45', text:'D&C 45:69 And there shall be gathered unto it out of every nation under heaven; and it shall be the only people that shall not be at war one with another.'},
    {code:'dc4570', chap:'dc45', text:'D&C 45:70 And it shall be said among the wicked: Let us not go up to battle against Zion, for the inhabitants of Zion are terrible; wherefore we cannot stand.'},
    {code:'dc4571', chap:'dc45', text:'D&C 45:71 And it shall come to pass that the righteous shall be gathered out from among all nations, and shall come to Zion, singing with songs of everlasting joy.'},
    {code:'dc4572', chap:'dc45', text:'D&C 45:72 And now I say unto you, keep these things from going abroad unto the world until it is expedient in me, that ye may accomplish this work in the eyes of the people, and in the eyes of your enemies, that they may not know your works until ye have accomplished the thing which I have commanded you;'},
    {code:'dc4573', chap:'dc45', text:'D&C 45:73 That when they shall know it, that they may consider these things.'},
    {code:'dc4574', chap:'dc45', text:'D&C 45:74 For when the Lord shall appear he shall be terrible unto them, that fear may seize upon them, and they shall stand afar off and tremble.'},
    {code:'dc4575', chap:'dc45', text:'D&C 45:75 And all nations shall be afraid because of the terror of the Lord, and the power of his might. Even so. Amen.'},
  ]
  const returnScripture = scriptures.map(item =>{
    if(item.code === props.code){
      return(
        <p>
          {item.text}
        </p>
      );
    }else if (item.chap === props.chap) {
      return(
        <p>
          {item.text}
        </p>
    )};

  });
    return (
      <div>
        <blockquote>{returnScripture}</blockquote>
      </div>
    );
}

export default Scriptures;

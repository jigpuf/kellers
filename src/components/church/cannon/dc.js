import React from 'react';

const Dc = () =>{

    const sections = [
      {section: '1', slug: '1', subjects: 'Prophecy, Preface', date: '1831 November 1', related:'1Ne 8,11,14,16,22; 2Ne 27,28,33; 3Ne 14; Ether 12; Moroni 2; D&C 35,88,90,101,133; 1 Cor 1; Isaiah 24,34'},
      {section: '2', slug: '2', subjects: 'Elijah', date: '1823 September 21', related:'***JSH1; 3Ne 25; D&C 27,110,128; Mal 4'},
      {section: '3', slug: '3', subjects: 'Lost BOM Pages', date: '1828 July', related:''},
      {section: '4', slug: '4', subjects: 'Missionary, Attributes', date: '1829 February', related:''},
      {section: '5', slug: '5', subjects: '3 witnesses, scourge', date: '1829 March', related:''},
      {section: '6', slug: '6', subjects: 'Missionary, Attributes, Mysteries, Law of Witnesses, Law of Harvest', date: '1829 April 7', related:''},
      {section: '7', slug: '7', subjects: 'Immortal John', date: '1829 April', related:''},
      {section: '8', slug: '8', subjects: '', date: '1829 April', related:''},
      {section: '9', slug: '9', subjects: '', date: '', related:''},
      {section: '10', slug: '10', subjects: '', date: '', related:''},
      {section: '11', slug: '11', subjects: '', date: '', related:''},
      {section: '12', slug: '12', subjects: '', date: '', related:''},
      {section: '13', slug: '13', subjects: '', date: '', related:''},
      {section: '14', slug: '14', subjects: '', date: '', related:''},
      {section: '15', slug: '15', subjects: '', date: '', related:''},
      {section: '16', slug: '16', subjects: '', date: '', related:''},
      {section: '17', slug: '17', subjects: '', date: '', related:''},
      {section: '18', slug: '18', subjects: '', date: '', related:''},
      {section: '19', slug: '19', subjects: '', date: '', related:''},
      {section: '20', slug: '20', subjects: '', date: '', related:''},
      {section: '21', slug: '21', subjects: '', date: '', related:''},
      {section: '22', slug: '22', subjects: '', date: '', related:''},
      {section: '23', slug: '23', subjects: '', date: '', related:''},
      {section: '24', slug: '24', subjects: '', date: '', related:''},
      {section: '25', slug: '25', subjects: '', date: '', related:''},
      {section: '26', slug: '26', subjects: '', date: '', related:''},
      {section: '27', slug: '27', subjects: '', date: '', related:''},
      {section: '28', slug: '28', subjects: '', date: '', related:''},
      {section: '29', slug: '29', subjects: '', date: '', related:''},
      {section: '30', slug: '30', subjects: '', date: '', related:''},
      {section: '31', slug: '31', subjects: '', date: '', related:''},
      {section: '32', slug: '32', subjects: '', date: '', related:''},
      {section: '33', slug: '33', subjects: '', date: '', related:''},
      {section: '34', slug: '34', subjects: '', date: '', related:''},
      {section: '35', slug: '35', subjects: '', date: '', related:''},
      {section: '36', slug: '36', subjects: '', date: '', related:''},
      {section: '37', slug: '37', subjects: '', date: '', related:''},
      {section: '38', slug: '38', subjects: '', date: '', related:''},
      {section: '39', slug: '39', subjects: '', date: '', related:''},
      {section: '40', slug: '40', subjects: '', date: '', related:''},
      {section: '41', slug: '41', subjects: '', date: '', related:''},
      {section: '42', slug: '42', subjects: '', date: '', related:''},
      {section: '43', slug: '43', subjects: '', date: '', related:''},
      {section: '44', slug: '44', subjects: '', date: '', related:''},
      {section: '45', slug: '45', subjects: '', date: '', related:''},
      {section: '46', slug: '46', subjects: '', date: '', related:''},
      {section: '47', slug: '47', subjects: '', date: '', related:''},
      {section: '48', slug: '48', subjects: '', date: '', related:''},
      {section: '49', slug: '49', subjects: '', date: '', related:''},
      {section: '50', slug: '50', subjects: '', date: '', related:''},
      {section: '51', slug: '51', subjects: '', date: '', related:''},
      {section: '52', slug: '52', subjects: '', date: '', related:''},
      {section: '53', slug: '53', subjects: '', date: '', related:''},
      {section: '54', slug: '54', subjects: '', date: '', related:''},
      {section: '55', slug: '55', subjects: '', date: '', related:''},
      {section: '56', slug: '56', subjects: '', date: '', related:''},
      {section: '57', slug: '57', subjects: '', date: '', related:''},
      {section: '58', slug: '58', subjects: '', date: '', related:''},
      {section: '59', slug: '59', subjects: '', date: '', related:''},
      {section: '60', slug: '60', subjects: '', date: '', related:''},
      {section: '61', slug: '61', subjects: '', date: '', related:''},
      {section: '62', slug: '62', subjects: '', date: '', related:''},
      {section: '63', slug: '63', subjects: '', date: '', related:''},
      {section: '64', slug: '64', subjects: '', date: '', related:''},
      {section: '65', slug: '65', subjects: '', date: '', related:''},
      {section: '66', slug: '66', subjects: '', date: '', related:''},
      {section: '67', slug: '67', subjects: '', date: '', related:''},
      {section: '68', slug: '68', subjects: '', date: '', related:''},
      {section: '69', slug: '69', subjects: '', date: '', related:''},
      {section: '70', slug: '70', subjects: '', date: '', related:''},
      {section: '71', slug: '71', subjects: '', date: '', related:''},
      {section: '72', slug: '72', subjects: '', date: '', related:''},
      {section: '73', slug: '73', subjects: '', date: '', related:''},
      {section: '74', slug: '74', subjects: '', date: '', related:''},
      {section: '75', slug: '75', subjects: '', date: '', related:''},
      {section: '76', slug: '76', subjects: '', date: '', related:''},
      {section: '77', slug: '77', subjects: '', date: '', related:''},
      {section: '78', slug: '78', subjects: '', date: '', related:''},
      {section: '79', slug: '79', subjects: '', date: '', related:''},
      {section: '80', slug: '80', subjects: '', date: '', related:''},
      {section: '81', slug: '81', subjects: '', date: '', related:''},
      {section: '82', slug: '82', subjects: '', date: '', related:''},
      {section: '83', slug: '83', subjects: '', date: '', related:''},
      {section: '84', slug: '84', subjects: '', date: '', related:''},
      {section: '85', slug: '85', subjects: '', date: '', related:''},
      {section: '86', slug: '86', subjects: '', date: '', related:''},
      {section: '87', slug: '87', subjects: '', date: '', related:''},
      {section: '88', slug: '88', subjects: '', date: '', related:''},
      {section: '89', slug: '89', subjects: '', date: '', related:''},
      {section: '90', slug: '90', subjects: '', date: '', related:''},
      {section: '91', slug: '91', subjects: '', date: '', related:''},
      {section: '92', slug: '92', subjects: '', date: '', related:''},
      {section: '93', slug: '93', subjects: '', date: '', related:''},
      {section: '94', slug: '94', subjects: '', date: '', related:''},
      {section: '95', slug: '95', subjects: '', date: '', related:''},
      {section: '96', slug: '96', subjects: '', date: '', related:''},
      {section: '97', slug: '97', subjects: '', date: '', related:''},
      {section: '98', slug: '98', subjects: '', date: '', related:''},
      {section: '99', slug: '99', subjects: '', date: '', related:''},
      {section: '100', slug: '100', subjects: '', date: '', related:''},
      {section: '101', slug: '101', subjects: '', date: '', related:''},
      {section: '102', slug: '102', subjects: '', date: '', related:''},
      {section: '103', slug: '103', subjects: '', date: '', related:''},
      {section: '104', slug: '104', subjects: '', date: '', related:''},
      {section: '105', slug: '105', subjects: '', date: '', related:''},
      {section: '106', slug: '106', subjects: '', date: '', related:''},
      {section: '107', slug: '107', subjects: '', date: '', related:''},
      {section: '108', slug: '108', subjects: '', date: '', related:''},
      {section: '109', slug: '109', subjects: '', date: '', related:''},
      {section: '110', slug: '110', subjects: '', date: '', related:''},
      {section: '111', slug: '111', subjects: '', date: '', related:''},
      {section: '112', slug: '112', subjects: '', date: '', related:''},
      {section: '113', slug: '113', subjects: '', date: '', related:''},
      {section: '114', slug: '114', subjects: '', date: '', related:''},
      {section: '115', slug: '115', subjects: '', date: '', related:''},
      {section: '116', slug: '116', subjects: '', date: '', related:''},
      {section: '117', slug: '117', subjects: '', date: '', related:''},
      {section: '118', slug: '118', subjects: '', date: '', related:''},
      {section: '119', slug: '119', subjects: '', date: '', related:''},
      {section: '120', slug: '120', subjects: '', date: '', related:''},
      {section: '121', slug: '121', subjects: '', date: '', related:''},
      {section: '122', slug: '122', subjects: '', date: '', related:''},
      {section: '123', slug: '123', subjects: '', date: '', related:''},
      {section: '124', slug: '124', subjects: '', date: '', related:''},
      {section: '125', slug: '125', subjects: '', date: '', related:''},
      {section: '126', slug: '126', subjects: '', date: '', related:''},
      {section: '127', slug: '127', subjects: '', date: '', related:''},
      {section: '128', slug: '128', subjects: '', date: '', related:''},
      {section: '129', slug: '129', subjects: '', date: '', related:''},
      {section: '130', slug: '130', subjects: '', date: '', related:''},
      {section: '131', slug: '131', subjects: '', date: '', related:''},
      {section: '132', slug: '132', subjects: '', date: '', related:''},
      {section: '133', slug: '133', subjects: '', date: '', related:''},
      {section: '134', slug: '134', subjects: '', date: '', related:''},
      {section: '135', slug: '135', subjects: '', date: '', related:''},
      {section: '136', slug: '136', subjects: '', date: '', related:''},
      {section: '137', slug: '137', subjects: '', date: '', related:''},
      {section: '138', slug: '138', subjects: '', date: '', related:''},
    ]
    const renderItems = sections.map(item => {
      return (
        <tr key={item.slug}>
          <td >{item.section}</td>
          <td>{item.subjects}</td>
          <td>{item.date}</td>
          <td>{item.related}</td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <tr>
            <th>Section</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Related</th>
          </tr>
          {renderItems}
        </table>
        Chapters Used:
        <li>1Ne 8,11,14,16,22</li>
        <li>2 Ne 27,28,33</li>
        <li>3 Ne 14,25</li>
        <li>Ether 12</li>
        <li>Moroni 2</li>
        <li>JSH-1</li>
        <li>1 Cor 1</li>
        <li>Isaiah 24,34</li>
        <li>Malachi 4</li>

      </div>
    );
}
export default Dc;

import React from 'react';

class Top100 extends React.Component {
  render () {
    return (
      <div>
        <h3>Top 100 Spanish Vocab:</h3>
        Nouns:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>Year</td><td>el a&ntilde;o</td></tr>
          <tr><td>Time/Weather</td><td>el tiempo</td></tr>
          <tr><td>Day</td><td>el d&iacute;a</td></tr>
          <tr><td>Thing</td><td>la cosa</td></tr>
          <tr><td>Man, mankind, husband</td><td>el hombre</td></tr>
          <tr><td>Part, portion</td><td>la parte</td></tr>
          <tr><td>Life</td><td>la vida</td></tr>
          <tr><td>Nothing</td><td>la nada</td></tr>
          <tr><td>Now</td><td>ahora</td></tr>
        </table><br />
        Verbs:<br />
        <table>
          <tr><th>English</th><th>Spanish</th><th>Verb Style</th></tr>
          <tr><td>To be(identity)</td><td>Ser</td><td>Ser</td></tr>
          <tr><td>To be(not identity)</td><td>Estar</td><td>Estar</td></tr>
          <tr><td>To have(have done)</td><td>Haber</td><td>Haber</td></tr>
          <tr><td>To have(possess)</td><td>Tener</td><td>Tener</td></tr>
          <tr><td>To do, make</td><td>Hacer</td><td>Hacer</td></tr>
          <tr><td>To be able to</td><td>Poder</td><td>Poder</td></tr>
          <tr><td>To say</td><td>Decir</td><td>Decir</td></tr>
          <tr><td>To go</td><td>Ir</td><td>Ir</td></tr>
          <tr><td>To see</td><td>Ver</td><td>Ver</td></tr>
          <tr><td>To Give</td><td>Dar</td><td>Dar</td></tr>
          <tr><td>To Know(knowledge)</td><td>Saber</td><td>Saber</td></tr>
          <tr><td>To want</td><td>Querer</td><td>Querer</td></tr>
          <tr><td>To arrive</td><td>Llegar</td><td>Standard</td></tr>
          <tr><td>To happen,pass</td><td>Pasar</td><td>Standard</td></tr>
          <tr><td>Should, out to</td><td>Deber</td><td>Standard</td></tr>
          <tr><td>To put, get(+adj.)</td><td>Poner</td><td>Poner</td></tr>
          <tr><td>To appear,seem</td><td>Parecer</td><td>Parecer</td></tr>
          <tr><td>To remain, stay</td><td>Quedar(reflexive)</td><td>Quedar</td></tr>
          <tr><td>To believe</td><td>Creer</td><td>Creer</td></tr>
          <tr><td>To Speak</td><td>Hablar</td><td>Standard</td></tr>
          <tr><td>To carry, take</td><td>Llevar</td><td>Standard</td></tr>
          <tr><td>To let, leave</td><td>Dejar</td><td>Standard</td></tr>
          <tr><td>To Follow</td><td>Seguir</td><td>Seguir</td></tr>
          <tr><td>To find</td><td>Encontrar</td><td>Encontrar</td></tr>
        </table><br />
        Articles:<br />
        <table>
          <tr><th>Gender</th><th>English</th><th>Singuar</th><th>Plural</th></tr>
          <tr><th>Masculine</th><td>The</td><td>el</td><td>los</td></tr>
          <tr><th>Feminine</th><td>The</td><td>la</td><td>las</td></tr>
          <tr><th>Masculine</th><td>A/An/Some</td><td>un/alg&uacute;n</td><td>unos/algunos</td></tr>
          <tr><th>Feminine</th><td>A/An/Some</td><td>una/alguna</td><td>unas/algunas</td></tr>
          <tr><th>Neutered</th><td>The(abstract)</td><td>lo</td><td></td></tr>
        </table><br />
        Prepositions:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>of,from</td><td>de</td></tr>
          <tr><td>to, at</td><td>a</td></tr>
          <tr><td>in, on</td><td>en</td></tr>
          <tr><td>by, for, through</td><td>por</td></tr>
          <tr><td>with</td><td>con</td></tr>
          <tr><td>for, to, in order to</td><td>para</td></tr>
          <tr><td>without</td><td>sin</td></tr>
          <tr><td>on top of, over, about</td><td>sobre</td></tr>
          <tr><td>until, up to, even</td><td>hasta</td></tr>
          <tr><td>between</td><td>entre</td></tr>
          <tr><td>from, since</td><td>desde</td></tr>
          <tr><td>also</td><td>tambien</td></tr>
          <tr><td>like that</td><td>asi</td></tr>
          <tr><td>Therefore</td><td>entonces</td></tr>
          <tr><td>After</td><td>despues</td></tr>

        </table><br />
        Conjunctions:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>that, which</td><td>que</td></tr>
          <tr><td>and</td><td>y</td></tr>
          <tr><td>like, as</td><td>como</td></tr>
          <tr><td>but, yet, accept</td><td>pero</td></tr>
          <tr><td>or</td><td>o/u</td></tr>
          <tr><td>if, whether</td><td>si</td></tr>
          <tr><td>because</td><td>porque</td></tr>
          <tr><td>when</td><td>cuando</td></tr>
          <tr><td>not even, niether, nor</td><td>ni</td></tr>
          <tr><td>where</td><td>donde</td></tr>
        </table><br />
        Standard Adjectives:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>no</td><td>no</td></tr>
          <tr><td>all, every</td><td>todo/a/os/as</td></tr>
          <tr><td>more</td><td>mas</td></tr>
          <tr><td>other, another</td><td>otro/a/os/as</td></tr>
          <tr><td>much, alot of</td><td>mucho/a/os/as</td></tr>
          <tr><td>same</td><td>mismo/a/os/as</td></tr>
          <tr><td>large, great</td><td>gran/grande/s</td></tr>
          <tr><td>little, few</td><td>poco/a/os/as</td></tr>
          <tr><td>much, so many, too</td><td>tanto/a/os/as</td></tr>
          <tr><td>each</td><td>cada</td></tr>
          <tr><td>less</td><td>menos</td></tr>
          <tr><td>new</td><td>nuevo/a/os/as</td></tr>
        </table><br />
        Possessive Adjectives:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>my</td><td>mi/s</td></tr>
          <tr><td>your</td><td>tu/s(informal) su/s(formal)</td></tr>
          <tr><td>his, her, its</td><td>su/s</td></tr>
          <tr><td>our</td><td>nuestro/a/os/as</td></tr>
          <tr><td>your</td><td>tu/s(informal) su/s(formal)</td></tr>
          <tr><td>their</td><td>su/s</td></tr>
        </table><br />
        Demonstrative Adjectives:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>this</td><td>este/a</td></tr>
          <tr><td>these</td><td>estes/as</td></tr>
          <tr><td>that</td><td>ese/a</td></tr>
          <tr><td>those</td><td>eses/as</td></tr>
          <tr><td>that(far)</td>aquel/la<td></td></tr>
          <tr><td>those(far)</td>aquellos/as<td></td></tr>
        </table><br />
        Numbers:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>First</td><td>primero/a/os/as</td></tr>
          <tr><td>Second</td><td>segundo/a/os/as</td></tr>
          <tr><td>Third</td><td>tercero/a/os/as</td></tr>
          <tr><td>One</td><td>un/una/uno</td></tr>
          <tr><td>2</td><td>dos</td></tr>
          <tr><td>3</td><td>tres</td></tr>
          <tr><td>4</td><td>cuatro</td></tr>
          <tr><td>5</td><td>cinco</td></tr>
          <tr><td>6</td><td></td></tr>
          <tr><td>7</td><td></td></tr>
          <tr><td>8</td><td></td></tr>
          <tr><td>9</td><td></td></tr>
          <tr><td>10</td><td></td></tr>
          <tr><td>11</td><td></td></tr>
          <tr><td>12</td><td></td></tr>
          <tr><td>13</td><td></td></tr>
          <tr><td>14</td><td></td></tr>
          <tr><td>15</td><td></td></tr>
          <tr><td>16</td><td></td></tr>
          <tr><td>17</td><td></td></tr>
          <tr><td>18</td><td></td></tr>
          <tr><td>19</td><td></td></tr>
          <tr><td>20</td><td></td></tr>
        </table><br />
        Subject Pronouns:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>I</td><td>yo</td></tr>
          <tr><td>You(informal)</td><td>tu</td></tr>
          <tr><td>You(formal)</td><td>usted</td></tr>
          <tr><td>he/she/it</td><td>el/ella</td></tr>
          <tr><td>we</td><td>nosotros</td></tr>
          <tr><td>you(plural)</td><td>ustedes</td></tr>
          <tr><td>they</td><td>ellos/as</td></tr>
        </table><br />
        Object Pronouns:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>hisself, herself, itself(reflexive)</td><td>se</td></tr>
          <tr><td>myself(reflexive)</td><td>me</td></tr>
          <tr><td>me</td><td>me</td></tr>
          <tr><td>you</td><td>te</td></tr>
          <tr><td>him/her</td><td>le/lo/a</td></tr>
          <tr><td>us</td><td>nos</td></tr>
          <tr><td>them</td><td>les/las/los</td></tr>
          <tr><td>you(plural)</td><td>se</td></tr>
        </table><br />
        Possesive Pronouns:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>mine</td><td>mio/a/os/as</td></tr>
          <tr><td>yours</td><td>suyo/a/os/as</td></tr>
          <tr><td>ours</td><td>nuestro/a/os/as</td></tr>
          <tr><td>theirs</td><td>suyo/a/os/as</td></tr>
          <tr><td>yours(plural people)</td><td>suyo/a/os/as</td></tr>
        </table><br />
        Demonstrative Pronouns:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>this</td><td>esto/a</td></tr>
          <tr><td>these</td><td>estos/as</td></tr>
          <tr><td>that</td><td>eso/a</td></tr>
          <tr><td>those</td><td>esos/as</td></tr>
          <tr><td>that(far)</td><td>aquel/la</td></tr>
          <tr><td>those(far)</td><td>aquellos/as</td></tr>
        </table><br />
        Question Words:<br />
        <table>
          <tr><th>English</th><th>Spanish</th></tr>
          <tr><td>Who</td><td></td></tr>
          <tr><td>What</td><td></td></tr>
          <tr><td>When</td><td></td></tr>
          <tr><td>Where</td><td></td></tr>
          <tr><td>Why</td><td></td></tr>
          <tr><td>How</td><td></td></tr>
          <tr><td>How much/many</td><td></td></tr>
          <tr><td>Which</td><td></td></tr>
        </table><br />
      </div>
    );
  }
}

export default Top100;

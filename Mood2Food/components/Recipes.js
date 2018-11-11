import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';

export class Bulky extends Component {
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://prettysimplesweet.com/wp-content/uploads/2014/04/Peanut-Butter-Chocolate-Chip-Pancakes-2.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Peanut-Butter-Chocolate-Chip-Pancakes-1498252') } >Peanut Butter Pancakes
         </Text>
          <Image source={{uri: "https://dwumenp4rf1cd.cloudfront.net/wp-content/uploads/2017/04/Easy-and-Allergy-Friendly-Cucumber-and-Avocado-Sushi-Rolls-678x381.png", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Cucumber-and-Avocado-Quick-Nori-Roll-2300489') } >Nori Roll
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Roast-Beef-Sandwich-with-Creamy-Horseradish-2217435') } >Roast Beef Sandwich
          </Text>
      </View>
    );
  }
};

export class Chocolate extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.averiecooks.com/wp-content/uploads/2014/01/redvelvetbarstext.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Velvet-Brownies-1238062') } >Velvet Brownies
         </Text>
          <Image source={{uri: "https://lh3.googleusercontent.com/Ln-doKSImilEaY7-cLKOiB0qcfSKfcDgE_y-zx84oPVay1IkkWBS1oS1ipv8-A4m3hf8NgO1B5x70M8ijxTHMA=s320-c-rj-v1-e365", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Taffy-Flowers-2302396') } >Taffy Flowers
            </Text>
            <Image source={{uri: "https://lh3.googleusercontent.com/LyGU0ZALWJSTkJEsWznU-pAFbHZJpKokBUvyFYQxWtvmDRkLYyzedsS9V1AYjEWDxSKTpl6oPq4BNTdNrlerJPs=s320-c-rj-v1-e365", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Mousse-1507616') } >Mousse
          </Text>
      </View>
    );
  }
};

export class Meat extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.simplyrecipes.com/wp-content/uploads/2015/04/easy-beef-brisket-vertical-a2-1200.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.simplyrecipes.com/recipes/beef_brisket/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly') } >Beef Brisket
         </Text>
          <Image source={{uri: "https://www.thefrugalnavywife.com/wp-content/uploads/2015/06/Lazy-Beef-Noodles.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Lazy-Beef-_-Noodles-2501773') } >Beef & Noodles
            </Text>
            <Image source={{uri: "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Firecracker-Chicken-1864671') } >Firecracker Chicken
          </Text>
        <Image source={{uri: "https://www.iheartnaptime.net/wp-content/uploads/2017/05/Hawaiian-meatballs-i-heart-naptime.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Hawaiian-Meatballs-2345661') } >Hawaiian Meetballs
          </Text>
      </View>
    );
  }
};

export class Combinations extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Fresh-Fruit-Combo_exps170811_AC2930252A02_21_3bC_RMS-1.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Summer-Fruit-Combo-683947') } >Fruit Combo
         </Text>
          <Image source={{uri: "http://ohhappydane.com/wp-content/uploads/2015/04/IMG_4184.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Overnight-Oats-Double-Chocolate-Chia-Combo-1116260') } >Chocolate Chia Combo
            </Text>
            <Image source={{uri: "https://pinchofyum.com/wp-content/uploads/2013/05/quinoa-black-bean-1.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Southwestern-Bean-Combo-1290829') } >Bean Combo
          </Text>
      </View>
    );
  }
};

export class Others extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://belleofthekitchen.com/wp-content/uploads/2016/03/garlic-parmesan-roasted-asparagus-square.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Asparagus-998165') } >Asparagus
         </Text>
          <Image source={{uri: "https://www.skinnytaste.com/wp-content/uploads/2017/09/Chickpea-Avocado-Salad-1-2.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Avocado-Salad-2505275') } >Avocado Salad
            </Text>
            <Image source={{uri: "http://www.justsotasty.com/wp-content/uploads/2016/03/Blueberry-Crumble-Bars-2.jpg", width: 180, height: 120}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Blueberry-Crumb-Bars-1838585') } >Blueberry Crumb Bars
          </Text>

      </View>
    );
  }
};

export class ProteinVitamin extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Salmon-con-Naranja.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Orange-Salmon-2060197') } >Orange Salmon
         </Text>
          <Image source={{uri: "https://www.whats4eats.com/files/fish-fish-chips-flickr-10413717%40N08-Smabs-Sputzer-9355126330-4x3.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/English-Fish-_n-Chips-1005960') } >English Fish & Chips
            </Text>
            <Image source={{uri: "http://3.bp.blogspot.com/-lxkVRbvXsFU/UMjSH4Owq6I/AAAAAAAACPA/I59PNux4LfE/s1600/030+vitamin+vegetable+soup.jpgZ", width: 180, height: 120}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-Soup-1445401') } >Vitamin Soup
          </Text>
         <Image source={{uri: "https://img-aws.ehowcdn.com/350x235p/photos.demandstudios.com/227/57/fotolia_9512288_XS.jpg", width: 180, height: 120}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-C-Fruit-Smoothie-2546565') } >Vitamin Fruit Smoothie
          </Text>
      </View>
    );
  }
};

export class Salty extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F07%2F12%2Fpork-medallions-ck-1687641-x.jpg%3Fitok%3DVzWQhviK&w=1000&c=sc&poi=face&q=70", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Easy-Pork-Medallions-With-Maple-balsamic-Sauce-2526300') } >Pork Medallions
         </Text>
          <Image source={{uri: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/14/03/cant-believe-its-vegan-chili-ck-x.jpg?itok=tiavMceC", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Accidentally-Awesome-Vegan-Chili-With-No-Weird-Ingredients-2465773') } >Vegan Chili
            </Text>
            <Image source={{uri: "https://barefeetinthekitchen.com/wp-content/uploads/2015/12/crispy-cheese-bacon-potatoes-7.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Cheese-and-Bacon-Potatoes-2245614') } >Cheese&Bacon Potatoes
          </Text>
      </View>
    );
  }
};

export class Soft extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/f7/35/80/f73580b26ffb1ebea3872779b7b2842e.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Homemade-Slider-Buns-2181607') } >Soft Slider Buns
         </Text>
          <Image source={{uri: "https://bakingamoment.com/wp-content/uploads/2018/08/IMG_9365-best-monster-cookies-square.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Monster-Cookies-1801838') } >Soft Monster Cookies
            </Text>
            <Image source={{uri: "https://barefeetinthekitchen.com/wp-content/uploads/2015/12/crispy-cheese-bacon-potatoes-7.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Cheese-and-Bacon-Potatoes-2245614') } >Cheese&Bacon Potatoes
          </Text>
      </View>
    );
  }
};

export class Starch extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://strengthandsunshine.com/wp-content/uploads/2018/10/Air-Fryer-Potato-Latkes-1.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Air-Fryer-Gluten-Free-Vegan-Potato-Latkes-_Allergy-Free_-Paleo_-2583328') } >Potato Latkes
         </Text>
          <Image source={{uri: "https://pbs.twimg.com/media/C6ilebbVsAAfEwH.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Fereni-Starch-Pudding-Allrecipes') } >Fereni Starch Pudding
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Wheat-Starch-Dough-Wrappers-1532172') } >Wheat Dough Wrappers
          </Text>
      </View>
    );
  }
};

export class Healthy extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://lh3.googleusercontent.com/rCZxHz3ZHOb3lzl5AcqiMcSD94TV_T8WdVc0bQqFTozQACDIjPemV1c5NCNLuz7g2cyYKCsWZHxotAHRuEPruQ=s320-c-rj-v1-e365", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Healthy-Mango-Strawberry-Smoothie-1120573') } >Mango Smoothie
         </Text>
            <Image source={{uri: "https://lh3.googleusercontent.com/bgSZ4EOoT-DE958aNZsdUlmFO1pHDT36S5SVgC1AEUaEl4Xbv0dqsvFOqPFW7D0NZr50Fku11VQWBA6rj8QYqp4=s320-c-rj-v1-e365", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Tropical-Oatmeal-2541828') } >Tropical Oatmeal
          </Text>
      </View>
    );
  }
};

export class Excited extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/06/693caa2a-5fdf-41fd-917b-3e197e26658f/seafood-crepes.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/SEAFOOD-CREPES-2466219') } >Seafood Crepes
         </Text>
            <Image source={{uri: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2016/12/29/0/CCTIA301H_Seafood-Paella_s4x3.jpg.rend.hgtvcom.616.462.suffix/1483043433838.jpeg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Easy-Seafood-Paella-2077829') } >Seafood Paella
          </Text>
          <Image source={{uri: "https://3.bp.blogspot.com/-hkN7VzIc_jQ/WGWzk6qV6hI/AAAAAAAAfeU/eqIcwHuIc6gmBSfbjqxmxHHpqAQSzrIswCLcB/s1600/Seafood%2BChowder%2B%25282%2Bof%2B1%2529.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Seafood-Chowder-977401') } >Seafood Chowder
          </Text> 
      </View>
    );
  }
};

export class OatChamo extends Component{
  render(){
    return (
      <View style={styles.container}>
      <Image source={{uri: "https://lh3.googleusercontent.com/oAX4MwfSBq9W2eT49W0GMZzXKv5J6WWyvhmXr0r9r_y1mbTFz0h6DrwVa98jppgfmvKxyykrudwAGizZAxdwYpA=s320-c-rj-v1-e365", width: 180, height: 120}} />
      <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Chamomile-_-Turmeric-Evening-Tea-1390087') } >Chamomile Tea
        </Text>
            <Image source={{uri: "https://lh3.googleusercontent.com/bgSZ4EOoT-DE958aNZsdUlmFO1pHDT36S5SVgC1AEUaEl4Xbv0dqsvFOqPFW7D0NZr50Fku11VQWBA6rj8QYqp4=s320-c-rj-v1-e365", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Tropical-Oatmeal-2541828') } >Tropical Oatmeal
          </Text>
      </View>
    );
  }
};

export class Sweet extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Mochi-Ice-Cream-1902195') } >Mochi Ice Cream
         </Text>
          <Image source={{uri: "https://www.chocolatemoosey.com/wp-content/uploads/2012/09/Nutella-Ice-Cream-No-Cook-Egg-Free-7715.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Nutella-Ice-cream-1531635') } >Nutella Ice cream
            </Text>
            <Image source={{uri: "https://realhousemoms.com/wp-content/uploads/Lemon-Cake-IG.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Lemon-Cake-2038999') } >Lemon Cake
          </Text>
      </View>
    );
  }
};

export class Crunchy extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://cdn.apartmenttherapy.info/image/fetch/w_800,c_fit/https://s3.amazonaws.com/pixtruder/original_images/267dc5d88ea63cb39ca68a6633ecdee55fc35fe6", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Microwave-Potato-Chips-1290788') } >Microwave Potato Chips
         </Text>
          <Image source={{uri: "http://apple-of-my-eye.com/wp-content/uploads/2016/03/Crispy-Snack-Edamame-3-1.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Edamame-1945385') } >Crunchy Edamame
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2013/11/118764-3247-mx.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Crunchy-Crouton-Sticks-972226') } >Crispy Crouton Sticks
          </Text>
      </View>
    );
  }
};

export class Tough extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.blessthismessplease.com/wp-content/uploads/2016/05/DSC_6017-1-1024x754.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/5-Ingredient-Granola-Bars-1263149') } >Granola Bars
         </Text>
          <Image source={{uri: "https://images-gmi-pmc.edge-generalmills.com/0082fc25-b75a-4b31-8a69-1a35bd4d62c9.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Garlic-and-Herb-Bread-Sticks-Serious-Eats-280756') } >Bread Sticks
            </Text>
            <Image source={{uri: "https://lh5.ggpht.com/FUJMmMkTzoElqK-4HTxxzwof6KRry2HKMg3gI8HMwkNIkfex0TyYVihKv_BZYvQl4d9nnfo4FuPpsqHeiVlO0Q=s320-c-rj-v1-e365", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Hidden-Valley-Candied-Nuts-989445') } >Candied Nuts
          </Text>
      </View>
    );
  }
};

export class Sugar extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://christinascucina.com/wp-content/uploads/2014/01/IMG_4471-660.jpg", width: 180, height: 120}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Sugared-Donuts-1111182') } >Sugared Donuts
         </Text>
          <Image source={{uri: "https://www.thekitchensnob.com/wp-content/uploads/2014/06/chocolate-lasagna-6.jpg", width: 180, height: 120}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Chocolate-lasagna-334802') } >Chocolate Lasagna
            </Text>
            <Image source={{uri: "https://lh3.googleusercontent.com/Nrlk9TRbT994U2zMUqbPICud-GjtQDt80ojVSd6xy2ZEC-m32aDYUw5Sm1BDHCePZNyE9d-ej5_zKcaHh87dyqM=s320-c-rj-v1-e365", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/4-Ingredient-Flourless-Chocolate-Cookies-_Low-FODMAP_-2086121') } >Flourless Cookies
          </Text>
         <Image source={{uri: "https://cdn.awesomecuisine.com/wp-content/uploads/2016/12/vanilla_sponge_cake.jpg", width: 180, height: 120}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vanilla-Sponge-Cake-1578657') } >Vanilla Sponge Cake
          </Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container:{
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle: {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'mightype',
    textDecorationLine: 'underline'
  }
});

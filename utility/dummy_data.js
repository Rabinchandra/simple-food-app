import Category from "./CategoryModel";
import FoodItem from "./FoodItemModel";

const categoriesData = [
    new Category(1, 'fruit', 'https://cdn.cdnparenting.com/articles/2019/03/14174037/264191096-H-1024x700.webp',[
        new FoodItem(13, 'apple', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg', 3),
        new FoodItem(11, 'watermelon', 'https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=0.88973xw:1xh;center,top&resize=1200:*', 3),
        new FoodItem(14, 'banana', 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/bananas.jpg?quality=82&strip=1', 4),
        new FoodItem(12, 'orange', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2010/3/30/1269958635128/oranges-notes-and-queries-001.jpg?width=465&quality=85&dpr=1&s=none', 4),
    ]),
    new Category(2, 'vegetable', 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6', [
        new FoodItem(21, 'pumpkin', 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/2021-10/pumpkin-varieties%C2%A9iStock.jpg.webp?itok=zJtD20_D', 3),
        new FoodItem(22, 'tomato', 'https://post.greatist.com/wp-content/uploads/sites/2/2021/08/390366-grt-Tomatoes-1200x628-Facebook-1200x628.jpg', 4),
        new FoodItem(23, 'cabbage', 'https://www.chewoutloud.com/wp-content/uploads/2021/03/Cabbages-horizontal-1024x683.jpg', 3),
        new FoodItem(24, 'mustard', 'https://i0.wp.com/thestonesoup.com/wp-content/uploads/Mustard-Greens.jpg?w=680&ssl=1', 2),
    ]),

    new Category(3, 'dairy', 'https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg', []),
    new Category(4, 'protein', 'https://www.eatingwell.com/thmb/sZYFe8F6lqViTSuV_yFJFB2FU_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-protein-fed94e49e3144aba84c815ed3623a51c.jpg', []),
    new Category(5, 'snack', 'https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg', []),
    new Category(6, 'drinks', 'https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg', []),

];  

export default categoriesData;
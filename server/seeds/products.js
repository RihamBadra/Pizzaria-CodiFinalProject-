exports.seed = async function (knex) {
  // Deletes ALL existing entries related to a product
  try {
    return await knex.transaction(async (trx) => {
      // For foreign key constrants
      await knex("order_product").del();

      await knex("orders").del();

      await knex("products")
        .del()
        .then(function () {
          // Inserts seed entries
          return knex("products").insert([
            {
              name: "Vegerterian Pizza",
              price: 25,
              category: "Pizza",
              photo_url:
                "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Pepperoni Pizza",
              price: 80.99,
              category: "Pizza",
              photo_url:
                "https://media.istockphoto.com/photos/large-american-style-pepperoni-and-cheese-pizza-in-cardboard-delivery-picture-id1256339158?b=1&k=20&m=1256339158&s=170667a&w=0&h=XFNxZmudE_SZqqz3-nrIM6dCvvfuxU8xrvDLYkFHFAg=",
            },
            {
              name: "Mushroom Pizza",
              price: 80.99,
              category: "Pizza",
              photo_url:
                "https://media.istockphoto.com/photos/pizza-with-mushrooms-picture-id1169939796?b=1&k=20&m=1169939796&s=170667a&w=0&h=HlPAd96zIDWtwU96oIHdOcrVcWfOHsGcr768e4NTVFI=",
            },
            {
              name: "Margeritta Pizza",
              price: 50.99,
              category: "Pizza",
              photo_url:
                "https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4=",
            },
            {
              name: "Chicken Pizza",
              price: 70.5,
              category: "Pizza",
              photo_url:
                "https://media.istockphoto.com/photos/butter-chicken-pizza-picture-id1043604390?b=1&k=20&m=1043604390&s=170667a&w=0&h=jBciV6gsbgr6ojopbcec0EillENYwi3a8v-DyhEEITQ=",
            },
            {
              name: "Cheese Pizza",
              price: 49,
              category: "Pizza",
              photo_url:
                "https://media.istockphoto.com/photos/three-cheese-pizza-picture-id183765987?b=1&k=20&m=183765987&s=170667a&w=0&h=UcPNmelnWxCayygzQy6CuEpKg6pxx8o8rywSsN0j03c=",
            },
            {
              name: "Pepsi",
              price: 4.99,
              category: "Drinks",
              photo_url:
                "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVwc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Orange Juice",
              price: 4.99,
              category: "Drinks",
              photo_url:
                "https://media.istockphoto.com/photos/shot-of-fresh-orange-juice-in-a-glass-picture-id1225546255?b=1&k=20&m=1225546255&s=170667a&w=0&h=BzHMJEjZmMg3riWXAY65k1jQv9cIOzOlzD9kqkkRcB0=",
            },
            {
              name: "Fries",
              price: 9.99,
              category: "Appetizers",
              photo_url:
                "https://media.istockphoto.com/photos/basket-of-famous-fast-food-french-fries-picture-id618214356?b=1&k=20&m=618214356&s=170667a&w=0&h=hBW1Ozw37xluDdo98v4U1JoRlU3elGRUIWFHmGUfmK8=",
            },
            {
              name: "Cheddar Sauce",
              price: 4.99,
              category: "Add Dips",
              photo_url:
                "https://media.istockphoto.com/photos/fresh-cheese-queso-dip-picture-id155068058?b=1&k=20&m=155068058&s=170667a&w=0&h=tAacp4BErsUdNiJNU1i5px2LUnKB5eSdCtDg7ybENJI=",
            },
            {
              name: "BBQ Sauce",
              price: 4.99,
              category: "Add Dips",
              photo_url:
                "https://media.istockphoto.com/photos/barbeque-sauce-picture-id521294143?b=1&k=20&m=521294143&s=170667a&w=0&h=-urJGnKxcncEURQidpxkagrzVVX1RTknigc-rSOWliM=",
            },
            {
              name: "Extra chocolate brownies",
              price: 22,
              category: "Deserts",
              photo_url:
                "https://user-images.githubusercontent.com/26470569/82767856-354a6000-9df0-11ea-854c-7684ca246d94.jpg",
            },
          ]);
        });
    });
  } catch (error) {
    console.log("ERROR");
    console.error(error);
  }
};

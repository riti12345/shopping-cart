	var shoppingCartItems=[];
	$(document).ready(function()
	{
		if(localStorage["shopping-cart-items"]!=null)
		{
			shoppingCartItems=JSON.parse(localStorage["shopping-cart-items"].toString());
		}
		displayShoppingCartItems();
	

	$('.add-to-cart').click(function()
	{
		var button=$(this);
		var id=button.attr("id");
		var name=button.attr("data-name");
		var price=button.attr("data-price");

		var quantity=1;

		var item={
			id:id,
			name:name,
			price:price,
			quantity:quantity
		};
		var exists=false;
		if(shoppingCartItems.length>0)
		{
			$.each(shoppingCartItems,function(index,value)
			{
				if(value.id==item.id)
				{
					value.quantity++;
					exists=true;
					return false;
				}
			});
		}
		if(!exists)
		{
			shoppingCartItems.push(item);
		}
		localStorage['shopping-cart-items']=JSON.stringify(shoppingCartItems);
		displayShoppingCartItems();
	});

	function displayShoppingCartItems()
	{
		if(localStorage["shopping-cart-items"]!=null)
		{
			shoppingCartItems=JSON.parse(localStorage["shopping-cart-items"].toString());
			
			$('.show-cart').html("");

			$.each(shoppingCartItems,function(index,item)
			{
				var htmlString="";
				htmlString+="<tr>";
				htmlString+="<td>"+item.name+ "</td>  ";
				htmlString+="<td style='text-align:right;padding:5px'>Price:"+item.price+"</td>";
				htmlString+="<td style='text-align:right;padding:5px'>Quantity:"+item.quantity+"</td>";
				htmlString+="<td style='text-align:right;padding:5px'>Total:"+item.price*item.quantity+"</td>";
				htmlString+="</tr>";
				$('.show-cart').append(htmlString).hide();
				$('ul.nav li.dropdown i.shopping-cart').hover(function(){
   					 $('.show-cart').show();
						},function(){
   					 $('.show-cart').hide();
						});
			});
		}
	}
	
});	

		/* change in quantity and no. of items (left of Quantity in the image above ) the prices should change automatically*/
		/**/

	
$('.num_item').on('keyup',function () {
        console.log('helllo');
        unit  = $(this).val();
        price = $(this).parent().next().children().val()
        console.log(unit);
        console.log(price);
        total_price = unit * price
        console.log('Total Price: ', total_price)
        $(this).parent().parent().prev().html(total_price);

    });
  $('.unit-select').on('change',function () {
          console.log('change');
          price  = $(this).val();
          unit = $(this).parent().prev().find('input').val()
          console.log('unit: ',unit);
          console.log('price: ', price);
          total_price = unit * price
          console.log('Total Price: ', total_price)
          $(this).parent().parent().prev().html(total_price);
      });

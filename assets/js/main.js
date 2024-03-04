(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 






  // language Selector

  const locales = ["es-ES","en-GB","fr-FR","it-IT","ja-JP","pt-BR","sv-SE","uk-UA","vi-VN","ru-RU","he-IL"];

  function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
         ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
      : "";
  }
  
  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");
  
  function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
      type: "language",
    }).of(intlLocale.language);
  
    dropdownContent.innerHTML = "";
  
    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.forEach((otherLocale) => {
      const otherIntlLocale = new Intl.Locale(otherLocale);
      const otherLangName = new Intl.DisplayNames([otherLocale], {
        type: "language",
      }).of(otherIntlLocale.language);
  
      const listEl = document.createElement("li");
      listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
        otherIntlLocale.region
      )}" />`;
      listEl.value = otherLocale;
      listEl.addEventListener("mousedown", function () {
        setSelectedLocale(otherLocale);
      });
      dropdownContent.appendChild(listEl);
    });
  
    dropdownBtn.innerHTML = `<img src="${getFlagSrc(
      intlLocale.region
    )}" />${langName}<span class="arrow-down"></span>`;
  }
  
  setSelectedLocale(locales[0]);
  const browserLang = new Intl.Locale(navigator.language).language;
  for (const locale of locales) {
    const localeLang = new Intl.Locale(locale).language;
    if (localeLang === browserLang) {
      setSelectedLocale(locale);
    }
  }







  // date time picker
  var logic = function( currentDateTime ){
    // 'this' is jquery object datetimepicker
    if( currentDateTime.getDay()==6 ){
      this.setOptions({
        minTime:'11:00'
      });
    }else
      this.setOptions({
        minTime:'8:00'
      });
  };
  jQuery('#datetimepicker').datetimepicker({
    onChangeDateTime:logic,
    onShow:logic
  });
  
  var logicTwo = function( currentDateTime ){
    // 'this' is jquery object datetimepicker
    if( currentDateTime.getDay()==6 ){
      this.setOptions({
        minTime:'11:00'
      });
    }else
      this.setOptions({
        minTime:'8:00'
      });
  };
  jQuery('#datetimepickerTwo').datetimepicker({
    onChangeDateTime:logicTwo,
    onShow:logicTwo
  });
  

  
    // ------------ Counter BEGIN ------------ 
    $(".counter__increment, .counter__decrement").click(function(e)
    {
        e.preventDefault()
        var $this = $(this);
        var $counter__input = $(this).parent().find(".counter__input");
        var $currentVal = parseInt($(this).parent().find(".counter__input").val());

        //Increment
        if ($currentVal != NaN && $this.hasClass('counter__increment'))
        {
            $counter__input.val($currentVal + 1);
        }
        //Decrement
        else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
        {
            if ($currentVal >= 1) {
                $counter__input.val($currentVal - 1);
            }
        }
    });
    // ------------ Counter END ------------ 

  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);

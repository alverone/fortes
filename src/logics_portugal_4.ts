import Splide from "@splidejs/splide";
import { LocalStorageHandler } from "./utils/LocalStorageHandler";
import { DesignStyle } from "./models/Style";

$(function () {
  const vw: number = $(window).width();

  $(".choiceactive.card").toggleClass("choiceActiveBorder");
  $("#laminat").prop("checked", true);

  const splideOptions = {
    arrows: false,
    pagination: false,
    speed: 550,
    flickPower: 400,
    breakpoints: {
      480: {
        pagination: true,
        speed: 650,
      },
    },
  };
  const storage: LocalStorageHandler = new LocalStorageHandler();

  const splideCalc = new Splide(".slider-container.splide", splideOptions);

  splideCalc.mount();

  $("input").each(function () {
    $(this).attr("name", $(this).data("name"));
  });

  if ($(".slider-wrapper.splide").length) {
    $(".fact-link").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      $(".fact-container.active").removeClass("active");
      $(".fact-container").eq($(this).index()).addClass("active");
      $(".fact-link.active").removeClass("active");
      $(this).addClass("active");
    });

    $(".tab-new").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      let index = $(this).index();

      $(".tab-new.active").removeClass("active");
      $(this).addClass("active");
      $(".slider-image-new").removeClass("active");
      $(".slider-image-new").each(function () {
        if ($(this).index() == index) {
          $(this).addClass("active");
        }
      });

      const style = DesignStyle.fromNumber(index);

      $(
        ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
      ).toggle(false);

      $(
        ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
          `.${style}, .specification-${style}.color-1`
      ).toggle(true);
      $(".calculator-slide.splide__slide .calculator-slide")
        .eq(index)
        .toggle(true);
      $(".calculator-tab.w--current").removeClass("w--current");
      $(`.calculator-tab`).eq(index).addClass("w--current");

      $(".color-tab.active, .slide-nav.active").removeClass("active");
      $(".div-block-14 .color-tab").each(function () {
        if ($(this).index() == 0) {
          $(this).addClass("active");
        }
      });

      splideCalc.refresh();
    });

    const splide = new Splide(".slider-wrapper.splide", splideOptions);
    splide.mount();

    splide.on("move", () =>
      setTimeout(
        () => {
          $(".splide__list").css(
            "height",
            $(".splide__slide.is-active .active img").css("height")
          );
        },
        vw > 480 ? 550 : 750
      )
    );

    $(".splide__list").css(
      "height",
      $(".splide__slide.is-active .active img").css("height")
    );

    $(".slick-btn-prev, .slick-btn-next").on("click", function () {
      let index: number = splide.index;
      let textPrev: string = "";
      let textNext: string = "";

      $(".slick-btn-prev, .slick-btn-next").removeClass("disabled");

      if ($(this).index() == 0) {
        splide.go("<");
        if (index-- - 1 == 0) {
          $(this).addClass("disabled");
        }
      } else {
        splide.go(">");
        if (index++ + 1 == 4) {
          $(this).addClass("disabled");
        }
      }

      switch (index) {
        case 0:
          textPrev = "";
          textNext = "Bedroom";
          break;
        case 1:
          textPrev = "Living room";
          textNext = "Kitchen";
          break;
        case 2:
          textPrev = "Bedroom";
          textNext = "Shower";
          break;
        case 3:
          textPrev = "Kitchen";
          textNext = "Bathroom";
          break;
        case 4:
          textPrev = "Shower";
          textNext = "";
          break;
        default:
          return;
      }

      $(".slick-prev-text").html(textPrev);
      $(".slick-next-text").html(textNext);
    });
  }

  $(".calculator-tab").on("click", function () {
    const index: number = $(this).index();
    const style = DesignStyle.fromNumber(index);

    $(
      ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
    ).toggle(false);

    $(
      ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
        `.${style}, .specification-${style}.color-1`
    ).toggle(true);
    $(".calculator-slide.splide__slide .calculator-slide")
      .eq(index)
      .toggle(true);
    $(".calculator-tab.w--current").removeClass("w--current");
    $(`.calculator-tab:eq(${index})`).addClass("w--current");

    $(".color-tab.active, .slide-nav.active").removeClass("active");
    $(".tab-new").eq(index).trigger("click");
    $(".div-block-14 .color-tab").each(function () {
      if ($(this).index() == 0) {
        $(this).addClass("active");
      }
    });

    splideCalc.refresh();
  });

  $(".increment-field .increment").on("click", function () {
    if ($(this).siblings(".increment-input").length <= 0) {
      $(this).siblings(".increment-input").val(0);
    }
  });

  $("#wf-form-consult").on("submit", (e) => {
    if (!$("#agreementCheckbox").is(":checked")) {
      $(".warning.agreementcheckbox").toggle(true);
    } else {
      $(".warning.agreementcheckbox").toggle(false);
    }

    if (!$("#phone").val()) {
      $(".warning.inputs.phone").toggle(true);
    } else {
      $(".warning.inputs.phone").toggle(false);
    }

    if (!$("#name").val()) {
      $(".warning.inputs.name").toggle(true);
    } else {
      $(".warning.inputs.name").toggle(false);
    }

    if ($(".warning").is(":visible")) {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();
      let oldBtnName = $("#submitBtn").html();
      $("#submitBtn").html("Зачекайте...");

      const fd = new FormData($("#wf-form-consult").get(0) as HTMLFormElement);

      //заявки на консультацию
      fetch(
        "https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec",
        {
          method: "POST",
          body: fd,
        }
      )
        .then(() => {
          $("#submitBtn").html(oldBtnName);
        })
        .catch((error) => console.error("Error!", error.message))
        .finally(() => {
          if (window.location.href.includes("/ru")) {
            window.location.assign("/ru/kdyakuiemo");
          } else {
            window.location.assign("/kdyakuiemo");
          }
        });
    }
  });

  $(".choice").on("click", function (e) {
    if (!$("#appliancesBool").is(":checked")) {
      e.preventDefault();

      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");

      return;
    }

    if (!$(this).hasClass("choiceActive")) {
      $(".choiceActive").removeClass("choiceActive");
      $(".choiceActiveBorder").removeClass("choiceActiveBorder");
      $(this).addClass("choiceActive");
      $(this).parent().addClass("choiceActiveBorder");

      if ($("#node").is(":checked")) {
        $("#appliances").prop("checked", "checked");
      }
    }
  });

  $("#node").on("change", function () {
    if ($("#node").is(":checked") && $(".choiceActive").length) {
      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");
    }
  });

  $("#appliancesBool").on("change", function () {
    if ($(this).is(":checked") && !$(".choiceActiveBorder").length) {
      $(".choice").first().toggleClass("choiceActive");
      $(".choice").first().parent().toggleClass("choiceActiveBorder");
    }
  });

  $(".hover-text").on("click", function () {
    let obj = $(this);

    obj.siblings(".hover-modal").css("display", "flex");
    if (parseInt(obj.siblings(".hover-modal").css("opacity")) == 0) {
      if (!isInViewport(obj.siblings(".hover-modal").get(0))) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: obj.siblings(".hover-modal").offset().top - 96,
          },
          450
        );
      }
      obj.siblings(".hover-modal").animate(
        {
          bottom: 42,
          opacity: 1,
        },
        200,
        "swing"
      );
    } else {
      obj.siblings(".hover-modal").animate(
        {
          bottom: 12,
          opacity: 0,
        },
        200,
        function () {
          obj.siblings(".hover-modal").toggle(false);
        }
      );
    }
  });

  $(".submit-container .button").on("click", function (e) {
    e.preventDefault();

    window.open(
      $('.calculator-btn:not([style*="display: none"]) a').data("href"),
      "_blank"
    );
  });

  $(".closing-btn").on("click", function () {
    let obj = $(this);
    obj.parent(".hover-modal").animate(
      {
        bottom: 12,
        opacity: 0,
      },
      200,
      function () {
        obj.parent(".hover-modal").toggle(false);
      }
    );
  });

  if (vw <= 480) {
    $(".tab-new").eq(1).trigger("click");
  }

  if (vw >= 992) {
    $(".preview-image, .blackbg-text").on({
      mouseenter: () => $(".video-cursor").css("opacity", 1),
      mouseleave: () => $(".video-cursor").css("opacity", 0),
    });
    $(".project-link-image").on({
      mouseenter: () => $(".project-dot").css("opacity", 1),
      mouseleave: () => $(".project-dot").css("opacity", 0),
    });
    $(".arrow-right").on({
      mouseenter: () => $(".small-hover.right").css("opacity", 1),
      mouseleave: () => $(".small-hover.right").css("opacity", 0),
    });
    $(".arrow-left").on({
      mouseenter: () => $(".small-hover.left").css("opacity", 1),
      mouseleave: () => $(".small-hover.left").css("opacity", 0),
    });

    $(".color-tab").on("click", function () {
      let index = $(this).index();
      let number = $(".calculator-tab.w--current").index();
      const style = DesignStyle.fromNumber(number);

      if ($(this).not(".active")) {
        $(".color-tab.active").removeClass("active");
        $(".div-block-14 .color-tab").each(function () {
          if ($(this).index() == index) {
            $(this).addClass("active");
          }
        });

        $(".color-var, .wrap-border.calculator-btn").toggle(false);

        $(
          `.calculator-slide .color-${
            index + 1
          }, .wrap-border.calculator-btn.specification-${style}.color-${
            index + 1
          }`
        ).toggle(true);
      }
    });

    $(".calculator-slider-option").on("click", function () {
      $(".calculator-slider-option.active").removeClass("active");
      $(this).addClass("active");
      splideCalc.go(parseInt($(this).data("slider-index")));
    });

    $(".calculator-arrow").on("click", function () {
      if ($(this).is(".arrow-right")) {
        splideCalc.go(">");
      } else {
        splideCalc.go("<");
      }

      $(".calculator-slider-option.active").removeClass("active");
      $(`.calculator-slider-option:eq(${splideCalc.index})`).addClass("active");
    });

    $("form input").on("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
      }
    });
  }

  if (vw <= 767) {
    $(".star").on("mouseleave", function () {
      $(this).removeClass("hidden");
      $(this).siblings(".image-price").removeClass("active");
    });

    $(".image-price").on("click", function () {
      if ($(this).is(".active")) {
        $(this).siblings(".star").removeClass("hidden");
        $(this).removeClass("active");
      }
    });

    $(".star").on("click", function () {
      if ($(this).is(".hidden")) {
        $(this).removeClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      } else {
        $(this).addClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      }
    });
  }

  function getData(obj: JQuery<HTMLElement>, dataVal: string): string | number {
    if (isFinite(Number(obj.data(dataVal)))) {
      return parseInt(obj.data(dataVal));
    } else {
      return obj.data(dataVal);
    }
  }

  function val(object: JQuery<HTMLElement>): number | string | string[] {
    if (isFinite(Number(object.val()))) {
      return Number(object.val());
    } else {
      return object.val();
    }
  }

  function isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

import Splide from "@splidejs/splide";
import { DesignStyle } from "./models/Style";
import {
  LocalStorageDestination,
  LocalStorageHandler,
} from "./utils/LocalStorageHandler";

$(function () {
  const vw = window.innerHeight || document.documentElement.clientHeight;
  const vh = window.innerWidth || document.documentElement.clientWidth;

  $(".choiceactive.card").toggleClass("choiceActiveBorder");

  const $splideNext = document.getElementById("splideNext");
  const $splidePrev = document.getElementById("splidePrev");
  const $splideNextText = document.getElementById("splideNextText");
  const $splidePrevText = document.getElementById("splidePrevText");

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

  const splideCalc = new Splide(".slider-container.splide", splideOptions);
  const storage = new LocalStorageHandler(LocalStorageDestination.en);

  splideCalc.mount();

  document.querySelectorAll("input").forEach(function () {
    try {
      this.name = this.dataset.name;
    } catch (_) {}
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

    document.querySelectorAll("div.tab-new").forEach((elem) =>
      elem.addEventListener("click", function () {
        if (this.classList.contains("active")) {
          return;
        }

        const index = parseInt(this.dataset.sliderIndex);

        document.querySelector(`div.tab-new.active`).classList.remove("active");
        this.classList.add("active");

        $(".slider-image-new.active").removeClass("active");
        $(".slider-image-new").each(function () {
          if ($(this).index() == index) {
            $(this).addClass("active");
          }
        });

        const style = DesignStyle.fromNumber(index);
        storage.set("style", style.toString());

        // $(
        //   ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var"
        // ).toggle(false);

        // $(
        //   ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
        //     `.${style}, .specification-${style}.color-1`
        // ).toggle(true);
        // $(".calculator-slide.splide__slide .calculator-slide")
        //   .eq(index)
        //   .toggle(true);

        document
          .querySelectorAll<HTMLInputElement>(
            `div.calculator-tab[data-slider-index="${index}"], div.color-tab[data-color-index='1']`
          )
          .forEach((element) => element.click());
      })
    );

    const splide = new Splide(".slider-wrapper.splide", splideOptions);
    splide.mount();

    splide.on("move", (index, ..._) => {
      setTimeout(
        () =>
          $(".splide__list").css(
            "height",
            $(".splide__slide.is-active .active img").css("height")
          ),
        vw > 480 ? 550 : 750
      );

      $splidePrev.classList.remove("disabled");
      $splideNext.classList.remove("disabled");

      let textPrev: string = "";
      let textNext: string = "";

      switch (index) {
        case 0:
          textPrev = "";
          textNext = "Дивитись спальню";
          $splidePrev.classList.add("disabled");
          break;
        case 1:
          textPrev = "Дивитись вітальню";
          textNext = "Дивитись кухню";
          break;
        case 2:
          textPrev = "Дивитись спальню";
          textNext = "Дивитись душ";
          break;
        case 3:
          textPrev = "Дивитись кухню";
          textNext = "Дивитись ванну";
          break;
        case 4:
          textPrev = "Дивитись душ";
          textNext = "";
          $splideNext.classList.add("disabled");
          break;
        default:
          return;
      }

      $splidePrevText.innerText = textPrev;
      $splideNextText.innerText = textNext;
    });

    $(".splide__list").css(
      "height",
      $(".splide__slide.is-active .active img").css("height")
    );

    $(".splide-btn-prev, .slick-btn-next").on("click", function () {
      let index: number = splide.index;

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
    });
  }

  $(".calculator-tab").on("click", function () {
    const index: number = $(this).index();
    const style = DesignStyle.fromNumber(index);

    $(
      ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var"
    ).toggle(false);

    $(
      ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
        `.${style}, .specification-${style}.color-1`
    ).toggle(true);
    $(".calculator-slide.splide__slide .calculator-slide")
      .eq(index)
      .toggle(true);
    $(".calculator-tab.active, .color-tab.active").removeClass("active");
    $(this).addClass("active");

    document
      .querySelectorAll<HTMLInputElement>(
        `div.color-tab[data-color-index='1'], .tab-new[data-slider-index="${index}"]`
      )
      .forEach((element) => element.click());

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

      const fd = new FormData(
        document.getElementById("wf-form-consult") as HTMLFormElement
      );

      //заявки на консультацію
      fetch(
        "https://script.google.com/macros/s/AKfycbyTfAJSAOSn1mB5Ua10w0AHAdKLb1weCd3ve139FkPzbqLEPnBeiE8gGGTq5S6XhmevIQ/exec",
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

  document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    const style = storage.get("style");
    const color = storage.get("color");

    window.open(`/specifications/${style}-${color}`, "_blank");
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

    document.querySelectorAll("div.color-tab").forEach((element) =>
      element.addEventListener("click", function () {
        const color = parseInt(this.dataset.colorIndex);
        const previousColor = parseInt(storage.get("color"));

        if (color == previousColor) {
          return;
        }

        document
          .querySelector(`div.color-tab[data-color-index="${previousColor}"]`)
          .classList.remove("active");
        this.classList.add("active");
        storage.set("color", color);

        $(".color-var").toggle(false);
        $(`.calculator-slide .color-${color}`).toggle(true);
      })
    );

    document
      .getElementById("calcSplideNext")
      .addEventListener("click", () => splideCalc.go(">"));

    document
      .getElementById("calcSplidePrev")
      .addEventListener("click", () => splideCalc.go("<"));

    splideCalc.on("move", function (index, ..._) {
      document
        .querySelector("div.calculator-slider-option.active")
        .classList.remove("active");
      document
        .querySelector(
          `div.calculator-slider-option[data-slider-index="${index}"]`
        )
        .classList.add("active");
    });

    $(".calculator form").on("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
      }
    });
  }

  ///commented due to these elements being hidden
  /*if (vw <= 767) {
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
  }*/

  document
    .querySelectorAll(".calculate")
    .forEach((elem) =>
      elem.addEventListener(
        "click",
        () => (document.location.hash = "calculate")
      )
    );

  document.querySelectorAll(".crossbtn.calc").forEach((elem) =>
    elem.addEventListener("click", () => {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    })
  );

  function isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= vh && rect.right <= vw
    );
  }
});

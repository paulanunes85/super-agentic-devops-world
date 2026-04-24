/* ============================================================
   INTERACTIVE COMPONENTS — Code playground, drag-drop,
   fill-gap, knowledge checks, flashcards, section sidebar
   ============================================================ */

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ============ KNOWLEDGE CHECK ============ */
function KnowledgeCheck({ question, lessonId }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  if (!question) return null;

  const isCorrect = selected === question.correct;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) {
      SFX?.coin?.();
      AppStore.awardXP(10);
      AppStore.awardCoins(5);
    } else {
      SFX?.wrong?.();
    }
  };

  return React.createElement("div", {
    style: {
      margin: "24px 0",
      padding: 20,
      background: "var(--card-bg, #1a1a2e)",
      border: "3px solid var(--card-border, #333)",
      borderRadius: 8,
      opacity: answered ? 0.7 : 1,
      transition: "opacity 0.4s"
    }
  },
    React.createElement("div", {
      style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }
    },
      React.createElement(PixelQBlock, { size: 32 }),
      React.createElement("span", {
        style: {
          fontFamily: "var(--font-pixel)",
          fontSize: 11,
          color: "var(--accent-2, #FBD000)",
          letterSpacing: "0.1em"
        }
      }, "KNOWLEDGE CHECK")
    ),
    React.createElement("p", {
      style: {
        fontSize: 15,
        marginBottom: 14,
        color: "var(--text, #eee)",
        lineHeight: 1.5
      }
    }, question.q),
    React.createElement("div", {
      style: { display: "flex", flexDirection: "column", gap: 8 }
    },
      question.options.map(function (opt, idx) {
        var bg = "var(--card-bg, #222)";
        var border = "2px solid var(--card-border, #444)";
        if (answered && idx === question.correct) {
          bg = "#1B5E20";
          border = "2px solid #4CAF50";
        } else if (answered && idx === selected && !isCorrect) {
          bg = "#7F1D1D";
          border = "2px solid #EF4444";
        }
        return React.createElement("button", {
          key: idx,
          onClick: function () { handleSelect(idx); },
          style: {
            padding: "10px 14px",
            background: bg,
            border: border,
            borderRadius: 6,
            color: "var(--text, #eee)",
            cursor: answered ? "default" : "pointer",
            textAlign: "left",
            fontSize: 13,
            fontFamily: "inherit",
            transition: "background 0.2s, border 0.2s"
          }
        }, opt);
      })
    ),
    answered && question.explain ? React.createElement("p", {
      style: {
        marginTop: 12,
        fontSize: 13,
        color: isCorrect ? "#4CAF50" : "#EF4444",
        fontStyle: "italic"
      }
    }, question.explain) : null
  );
}

/* ============ CODE PLAYGROUND ============ */
function CodePlayground({ challenge }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);

  if (!challenge) return null;

  var validate = function () {
    var trimmed = input.trim();
    if (!trimmed) return;
    if (challenge.expected.test(trimmed)) {
      setResult("success");
      SFX?.coin?.();
      AppStore.awardCoins(challenge.coins || 5);
    } else {
      setResult("error");
      SFX?.wrong?.();
    }
  };

  var handleKeyDown = function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      validate();
    }
  };

  return React.createElement("div", {
    style: {
      margin: "20px 0",
      background: "#0D1117",
      border: "2px solid #30363D",
      borderRadius: 8,
      padding: 18,
      fontFamily: "'Courier New', monospace"
    }
  },
    React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#4AF626",
        marginBottom: 12,
        lineHeight: 1.5
      }
    },
      React.createElement("span", { style: { color: "#8B949E" } }, "// "),
      challenge.prompt
    ),
    React.createElement("div", {
      style: { display: "flex", gap: 8, alignItems: "flex-start" }
    },
      React.createElement("span", {
        style: { color: "#4AF626", lineHeight: "36px", userSelect: "none" }
      }, "$ "),
      React.createElement("textarea", {
        value: input,
        onChange: function (e) { setInput(e.target.value); setResult(null); setShowHint(false); },
        onKeyDown: handleKeyDown,
        rows: 1,
        style: {
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#4AF626",
          fontSize: 14,
          fontFamily: "'Courier New', monospace",
          resize: "none",
          lineHeight: "36px"
        },
        placeholder: "Type your command here..."
      }),
      React.createElement("button", {
        onClick: validate,
        style: {
          padding: "8px 16px",
          background: "#238636",
          color: "#FFF",
          border: "none",
          borderRadius: 6,
          fontFamily: "var(--font-pixel)",
          fontSize: 11,
          cursor: "pointer",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap"
        }
      }, "RUN \u25B6")
    ),
    result === "success" ? React.createElement("div", {
      style: { marginTop: 10, color: "#4CAF50", fontSize: 13 }
    }, "\u2713 Correct! +" + (challenge.coins || 5) + " coins") : null,
    result === "error" ? React.createElement("div", {
      style: { marginTop: 10 }
    },
      React.createElement("span", { style: { color: "#EF4444", fontSize: 13 } }, "\u2717 Not quite."),
      !showHint ? React.createElement("button", {
        onClick: function () { setShowHint(true); },
        style: {
          marginLeft: 10,
          padding: "4px 10px",
          background: "transparent",
          border: "1px solid #8B949E",
          color: "#8B949E",
          borderRadius: 4,
          fontSize: 11,
          cursor: "pointer"
        }
      }, "Show hint") : null,
      showHint ? React.createElement("div", {
        style: { marginTop: 6, color: "#FBD000", fontSize: 12, fontStyle: "italic" }
      }, challenge.hint) : null
    ) : null
  );
}

/* ============ DRAG SEQUENCE ============ */
function DragSequence({ challenge }) {
  var shuffled = useMemo(function () {
    var arr = challenge.items.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }, [challenge.prompt]);

  const [items, setItems] = useState(shuffled);
  const [dragIdx, setDragIdx] = useState(null);
  const [result, setResult] = useState(null);
  const [itemResults, setItemResults] = useState(null);

  if (!challenge) return null;

  var handleDragStart = function (e, idx) {
    setDragIdx(idx);
    e.dataTransfer.effectAllowed = "move";
  };

  var handleDragOver = function (e, idx) {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) return;
    var newItems = items.slice();
    var dragged = newItems.splice(dragIdx, 1)[0];
    newItems.splice(idx, 0, dragged);
    setItems(newItems);
    setDragIdx(idx);
  };

  var handleDragEnd = function () {
    setDragIdx(null);
  };

  var checkOrder = function () {
    var correct = challenge.correctOrder;
    var results = items.map(function (item, i) { return item === correct[i]; });
    setItemResults(results);
    if (results.every(Boolean)) {
      setResult("success");
      SFX?.coin?.();
      AppStore.awardCoins(challenge.coins || 10);
    } else {
      setResult("error");
      SFX?.wrong?.();
    }
  };

  var tryAgain = function () {
    setResult(null);
    setItemResults(null);
  };

  return React.createElement("div", {
    style: {
      margin: "20px 0",
      padding: 18,
      background: "var(--card-bg, #1a1a2e)",
      border: "3px solid var(--card-border, #333)",
      borderRadius: 8
    }
  },
    React.createElement("p", {
      style: {
        fontFamily: "var(--font-pixel)",
        fontSize: 12,
        color: "var(--accent-2, #FBD000)",
        marginBottom: 14,
        letterSpacing: "0.05em"
      }
    }, challenge.prompt),
    React.createElement("div", {
      style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }
    },
      items.map(function (item, idx) {
        var bg = "#8B5A2B";
        var borderColor = "#6B3F1A";
        if (itemResults) {
          if (itemResults[idx]) {
            bg = "#1B5E20";
            borderColor = "#4CAF50";
          } else {
            bg = "#7F1D1D";
            borderColor = "#EF4444";
          }
        }
        return React.createElement("div", {
          key: item,
          draggable: result !== "success",
          onDragStart: function (e) { handleDragStart(e, idx); },
          onDragOver: function (e) { handleDragOver(e, idx); },
          onDragEnd: handleDragEnd,
          style: {
            padding: "10px 16px",
            background: bg,
            border: "2px solid " + borderColor,
            borderRadius: 6,
            color: "#FFF",
            fontFamily: "var(--font-pixel)",
            fontSize: 12,
            cursor: result === "success" ? "default" : "grab",
            userSelect: "none",
            textAlign: "center",
            transition: "background 0.2s, border 0.2s",
            animation: itemResults && !itemResults[idx] ? "shake 0.3s" : "none"
          }
        }, item);
      })
    ),
    result !== "success" ? React.createElement("button", {
      onClick: result === "error" ? tryAgain : checkOrder,
      style: {
        padding: "8px 18px",
        background: result === "error" ? "#B45309" : "#238636",
        color: "#FFF",
        border: "none",
        borderRadius: 6,
        fontFamily: "var(--font-pixel)",
        fontSize: 11,
        cursor: "pointer",
        letterSpacing: "0.05em"
      }
    }, result === "error" ? "TRY AGAIN" : "CHECK ORDER \u25B6") : null,
    result === "success" ? React.createElement("div", {
      style: { color: "#4CAF50", fontSize: 13, fontFamily: "var(--font-pixel)" }
    }, "\u2713 Perfect order! +" + (challenge.coins || 10) + " coins") : null
  );
}

/* ============ FILL THE GAP ============ */
function FillGap({ gaps }) {
  const [answers, setAnswers] = useState(function () {
    return (gaps || []).map(function () { return ""; });
  });
  const [completed, setCompleted] = useState(function () {
    return (gaps || []).map(function () { return false; });
  });
  const [allDone, setAllDone] = useState(false);

  if (!gaps || gaps.length === 0) return null;

  var handleChange = function (idx, value) {
    var newAnswers = answers.slice();
    newAnswers[idx] = value;
    setAnswers(newAnswers);

    var newCompleted = completed.slice();
    var isCorrect = value.trim().toLowerCase() === gaps[idx].answer.toLowerCase();
    if (isCorrect && !newCompleted[idx]) {
      newCompleted[idx] = true;
      setCompleted(newCompleted);
      SFX?.coin?.();
      AppStore.awardCoins(5);
    } else if (!isCorrect) {
      newCompleted[idx] = false;
      setCompleted(newCompleted);
    }

    if (newCompleted.every(Boolean)) {
      setAllDone(true);
    }
  };

  return React.createElement("div", {
    style: {
      margin: "20px 0",
      background: "#0D1117",
      border: "2px solid #30363D",
      borderRadius: 8,
      padding: 18,
      fontFamily: "'Courier New', monospace"
    }
  },
    React.createElement("div", {
      style: {
        fontFamily: "var(--font-pixel)",
        fontSize: 11,
        color: "var(--accent-2, #FBD000)",
        marginBottom: 14,
        letterSpacing: "0.1em"
      }
    }, "FILL THE GAPS"),
    gaps.map(function (gap, idx) {
      var parts = gap.code.split("_____");
      var borderColor = "#30363D";
      if (answers[idx].trim().length > 0) {
        borderColor = completed[idx] ? "#4CAF50" : "#EF4444";
      }

      return React.createElement("div", {
        key: idx,
        style: {
          marginBottom: 12,
          fontSize: 14,
          color: "#E6EDF3",
          lineHeight: 2,
          whiteSpace: "pre-wrap"
        }
      },
        parts[0],
        React.createElement("input", {
          type: "text",
          value: answers[idx],
          onChange: function (e) { handleChange(idx, e.target.value); },
          placeholder: "...",
          style: {
            width: Math.max(80, (gap.answer.length + 2) * 10),
            background: "#161B22",
            border: "2px solid " + borderColor,
            borderRadius: 4,
            color: "#4AF626",
            padding: "2px 8px",
            fontSize: 14,
            fontFamily: "'Courier New', monospace",
            outline: "none",
            margin: "0 4px",
            transition: "border-color 0.2s"
          }
        }),
        parts[1] || "",
        !completed[idx] && answers[idx].trim().length > 2 ? React.createElement("span", {
          style: { color: "#8B949E", fontSize: 11, marginLeft: 8, fontStyle: "italic" }
        }, gap.hint) : null
      );
    }),
    allDone ? React.createElement("div", {
      style: {
        marginTop: 10,
        color: "#4CAF50",
        fontSize: 13,
        fontFamily: "var(--font-pixel)"
      }
    }, "\u2713 All gaps filled!") : null
  );
}

/* ============ FLASHCARD DECK ============ */
function FlashcardDeck({ worldId }) {
  var glossary = (PLATFORM_DATA && PLATFORM_DATA.glossary) || [];
  var worldTerms = glossary.filter(function (g) { return g.world === worldId; });

  var picked = useMemo(function () {
    if (worldTerms.length === 0) return [];
    var shuffled = worldTerms.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
    }
    return shuffled.slice(0, 3);
  }, [worldId]);

  const [flipped, setFlipped] = useState({});

  if (picked.length === 0) return null;

  var handleFlip = function (idx) {
    var newFlipped = Object.assign({}, flipped);
    newFlipped[idx] = !newFlipped[idx];
    setFlipped(newFlipped);
    if (!flipped[idx]) {
      SFX?.click?.();
      AppStore.viewGlossaryTerm(picked[idx].term);
    }
  };

  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      margin: "24px 0",
      flexWrap: "wrap"
    }
  },
    picked.map(function (term, idx) {
      var isFlipped = !!flipped[idx];
      return React.createElement("div", {
        key: term.term,
        onClick: function () { handleFlip(idx); },
        style: {
          width: 160,
          height: 100,
          perspective: 600,
          cursor: "pointer"
        }
      },
        React.createElement("div", {
          style: {
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.5s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }
        },
          React.createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              background: "var(--accent-2, #FBD000)",
              border: "3px solid #000",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              boxSizing: "border-box",
              fontFamily: "var(--font-pixel)",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              fontWeight: "bold"
            }
          }, term.term),
          React.createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "var(--card-bg, #1a1a2e)",
              border: "3px solid var(--accent-2, #FBD000)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              boxSizing: "border-box",
              fontSize: 11,
              color: "var(--text, #eee)",
              textAlign: "center",
              lineHeight: 1.4,
              overflow: "hidden"
            }
          }, term.def)
        )
      );
    })
  );
}

/* ============ SECTION SIDEBAR ============ */
function SectionSidebar({ sections, currentIdx }) {
  const [visible, setVisible] = useState(true);

  useEffect(function () {
    var check = function () {
      setVisible(window.innerWidth >= 1100);
    };
    check();
    window.addEventListener("resize", check);
    return function () { window.removeEventListener("resize", check); };
  }, []);

  if (!visible || !sections || sections.length === 0) return null;

  var handleClick = function (idx) {
    var el = document.querySelector("[data-section-idx=\"" + idx + "\"]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      SFX?.click?.();
    }
  };

  return React.createElement("div", {
    style: {
      position: "fixed",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0,
      zIndex: 100
    }
  },
    React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 2,
        background: "#444",
        transform: "translateX(-50%)"
      }
    }),
    sections.map(function (sec, idx) {
      var isCurrent = idx === currentIdx;
      var isDone = idx < currentIdx;
      var dotColor = "#555";
      var shadow = "none";
      if (isCurrent) {
        dotColor = "#FBD000";
        shadow = "0 0 8px #FBD000, 0 0 16px #FBD000";
      } else if (isDone) {
        dotColor = "#4CAF50";
      }

      return React.createElement("div", {
        key: idx,
        onClick: function () { handleClick(idx); },
        title: sec.heading || ("Section " + (idx + 1)),
        style: {
          position: "relative",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: dotColor,
          border: "2px solid #000",
          cursor: "pointer",
          marginBottom: idx < sections.length - 1 ? 18 : 0,
          boxShadow: shadow,
          transition: "box-shadow 0.3s, background 0.3s",
          zIndex: 1
        }
      });
    })
  );
}

/* ============ EXPORT ============ */
Object.assign(window, {
  KnowledgeCheck,
  CodePlayground,
  DragSequence,
  FillGap,
  FlashcardDeck,
  SectionSidebar
});

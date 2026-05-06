# Independent Review: ECON 205 Final Exam Preparation

**To:** Hanna Nio
**From:** Independent Review by Gemini
**Date:** May 6, 2026
**Subject:** Critical-Friend Review of ECON 205 Study Materials

## 1. Overall Assessment

Your preparation for the ECON 205 final is exceptionally thorough and well-structured. The combination of a detailed cram sheet, diagram bank, targeted trap drills, and full mock exams is a robust strategy. The materials demonstrate a strong command of the core concepts, particularly the "6 traps" you've identified. This review, therefore, focuses on pushing from a 95% understanding to a 100% mastery, focusing on subtle errors, deepening conceptual frameworks, and preparing for the curveball questions that separate a top grade.

## 2. Formula & Calculation Verification

My review found no outright formula errors in your cram sheet, which is excellent. The calculations in your drills and mocks are also highly accurate. However, I identified a recurring conceptual error in the *setup* of international trade problems, which leads to confusing results.

*   **File:** `/Users/ian/gemini_playground/tutoring/HannaNio/StudyHub/econ205/_mock_a_a.md` (Question 28)
    *   **Context:** The problem asks to analyze a \$5 tariff for a small open economy where the world price is \$20. The domestic supply and demand curves are given as $Q^D = 100 - 2P$ and $Q^S = 2P$.
    *   **Concern:** Your calculation correctly shows that at a price of \$25 (world price + tariff), domestic quantity demanded (50) equals domestic quantity supplied (50), making imports zero. You correctly calculate the Deadweight Loss (DWL) of this "prohibitive tariff" as \$50. While arithmetically correct, a prohibitive tariff is a very specific and unusual case. It's unlikely a professor would design a multi-part question where the central element (imports, and thus tariff revenue) immediately becomes zero.
    *   **Fix:** This suggests the initial parameters were not stress-tested. The core issue is that the autarky (no-trade) equilibrium price is P=\$25 ($100-2P=2P \Rightarrow 4P=100$). A tariff that raises the domestic price to the autarky level will, by definition, eliminate all trade and all tariff revenue.

*   **File:** `/Users/ian/gemini_playground/tutoring/HannaNio/StudyHub/econ205/problem-bank.qmd` (Chapter 18, Question 9)
    *   **Context:** The problem states the country is "importing steel" at a world price of \$50. The demand and supply curves are $Q^D = 200 - 2P$ and $Q^S = 4P$.
    *   **Concern:** Here, the error is more fundamental. The autarky price is \$33.33 ($200-2P=4P \Rightarrow 6P=200$). Since the world price (\$50) is *above* the domestic no-trade price, this country would be a steel *exporter*, not an importer. Your own solution notes recognize this contradiction, forcing you to change the problem's parameters ad-hoc.
    *   **Fix:** This is a critical point to internalize. **Before analyzing any trade policy, always calculate the autarky price first.** Compare it to the world price. This tells you whether the country is an importer or an exporter, which dictates how you model the tariff or subsidy. A tariff is a tax on *imports*; it has no effect if the country is an exporter. You need to practice setting up these problems from scratch to avoid this failure mode on the exam.

## 3. Concepts Needing Stronger Framing

Your understanding is broad, but three areas could be deepened from rote memorization to a more resilient conceptual framework.

*   **Concept:** The Taylor Rule and the Taylor Principle
    *   **Location:** `econ205/cram-sheet.qmd`, `econ205/_mock_a_a.md`
    *   **Current Framing:** You have the formula correct and apply it well: $i = r^* + \pi + 0.5(\pi-\pi^*) + 0.5(y-y^*)$.
    *   **Suggested Strengthening:** Frame it around the **Taylor Principle**. For monetary policy to stabilize inflation, the central bank must raise the nominal interest rate *more than one-for-one* with increases in inflation. In your formula, the coefficient on $\pi$ is $1 + 0.5 = 1.5$. Since $1.5 > 1$, the rule automatically satisfies the Taylor Principle. This ensures that when inflation rises, the *real* interest rate ($r \approx i - \pi$) also rises, which cools down the economy. If the response were less than one-for-one, a rise in inflation would lead to a *fall* in the real rate, which would stimulate the economy and cause inflation to spiral upwards. Understanding this principle is key to explaining *why* the rule works, not just how to calculate it.

*   **Concept:** Ricardian Equivalence vs. Crowding Out
    *   **Location:** `econ205/index.qmd`, `econ205/_traps_a.md`
    *   **Current Framing:** You correctly identify both as arguments against the effectiveness of fiscal stimulus. Crowding out is modeled in the loanable funds market, and Ricardian Equivalence is mentioned as a possibility.
    *   **Suggested Strengthening:** Frame them as critiques of two different actors. **Ricardian Equivalence is about how households react.** It posits that households are forward-looking and see a deficit-financed tax cut today as a tax increase tomorrow, so they save the entire cut, neutralizing the stimulus. **Crowding out is about how markets react.** Even if households *do* spend the extra income, the increased government borrowing puts upward pressure on interest rates, which "crowds out" private investment. These are not mutually exclusive. An exam question might ask you to disentangle them: "If we observe a government stimulus has little effect on output, how could you test whether this was due to Ricardian equivalence or crowding out?" (Answer: Look at interest rates. If they rose, crowding out is a likely culprit. If they were stable but consumption didn't rise, it points towards Ricardian behavior).

*   **Concept:** Unconventional Monetary Policy Transmission
    *   **Location:** `econ205/_mock_a_a.md` (Question 30)
    *   **Current Framing:** Your answer key correctly lists QE and forward guidance as ZLB tools and mentions the portfolio-balance channel.
    *   **Suggested Strengthening:** Add the specific transmission channels to your cram sheet. It solidifies understanding beyond just naming the tools.
        1.  **Quantitative Easing (QE):** Works through a) the **portfolio-balance channel** (forcing investors out of safe bonds into riskier assets like stocks and corporate bonds, creating a wealth effect and lowering borrowing costs for firms) and b) the **signaling channel** (reinforcing the central bank's commitment to low rates for longer).
        2.  **Forward Guidance:** Works by managing expectations. By credibly promising to keep rates low until certain economic conditions (e.g., unemployment below 5%) are met, the central bank can lower *long-term* interest rates today, even when the short-term rate is stuck at zero. This directly stimulates investment and durable consumption.

## 4. Top 5 Recommended Drills

1.  **Trade Policy Setup:** Before touching a tariff or quota calculation, solve for the autarky price and quantity. Compare the autarky price to the world price. State explicitly "This country is an importer/exporter because $P_A > P_W$ / $P_A < P_W$." Then, and only then, proceed. Drill this on 5-6 fresh problems you build yourself with different numbers.

2.  **The Full International Transmission Mechanism:** Drill the sequence from a policy change to its full open-economy effect. For example: "The Fed tightens policy."
    *   (1) Domestic `r` rises.
    *   (2) Capital flows in to chase higher returns.
    *   (3) Demand for the USD in FX markets rises.
    *   (4) The USD appreciates.
    *   (5) US exports become more expensive abroad; foreign imports become cheaper at home.
    *   (6) `NX` falls, shifting `AD` to the left, partially offsetting the initial goal of the tightening.
    *   This "leakage" through the `NX` channel is a key part of open-economy macro.

3.  **Solow Model Transitions:** Your materials are great on the steady state. Now drill the transition. "A country's saving rate `s` permanently increases. Describe the effect on the *growth rate* of output per worker and the *level* of output per worker in the short run (transition) and the long run (new steady state)." Answer: In the short run, the growth rate temporarily accelerates. In the long run, the growth rate returns to the rate of technological progress, but the *level* of output per worker is permanently higher.

4.  **Phillips Curve: Shifts vs. Movements:** Create a drill with 10 scenarios. E.g., "Consumer confidence booms" -> Demand shock -> Movement down and to the left along the SRPC. "An oil price spike" -> Supply shock -> SRPC shifts up and to the right. "The central bank announces a newly credible 2% inflation target" -> Expectations change -> SRPC shifts down. This forces you to distinguish the cause before concluding the effect.

5.  **Multipliers with All Leakages:** Practice calculating the multiplier with all the leakages at once, as seen in `index.qmd`. Formula: $1 / (1 - MPC(1-t) + m)$. Use MPC=0.8, t=0.2, m=0.1. This grounds the abstract concept of leakages in a concrete calculation and shows why the simple $1/(1-MPC)$ is a wild exaggeration.

## 5. Potential 'Curveball' Questions from Pérez

These are questions that test for a deeper, integrated understanding—the kind a professor uses to sort the A's from the A-minuses.

1.  **The 'Impossible Trinity' (The Trilemma):** "Standard international macro theory posits that a country cannot simultaneously have all three of the following: a fixed exchange rate, free capital mobility, and an independent monetary policy. Explain the intuition for this 'trilemma' by choosing two of the three and explaining why the third is constrained. For example, if Canada wants free capital flow with the U.S. and an independent monetary policy, what must be true of its exchange rate? If Saudi Arabia wants to peg its currency to the dollar and allow capital to flow freely, what must it give up?"

2.  **Sovereign Debt-Bank Doom Loop:** "Suppose the banks in Spain hold a large amount of Spanish government bonds. A recession hits, tax revenue falls, and markets grow concerned about the Spanish government's ability to repay its debt, causing the price of its bonds to collapse. Trace the feedback loop this could create for Spain's banking system. How might the European Central Bank (acting as the monetary authority) try to intervene, and what are the risks of that intervention?"

3.  **Hysteresis in Unemployment:** "Following a deep recession, the unemployment rate in a country remains stubbornly high for years, even after demand has recovered. An economist suggests this is due to 'hysteresis.' Explain what this means. How does the concept of hysteresis challenge the traditional AD/AS model's view of a vertical long-run aggregate supply curve and a stable natural rate of unemployment (NAIRU)? If hysteresis is real, does it strengthen or weaken the case for aggressive policy intervention during a downturn?"

These materials are excellent. This final stage of preparation is about hardening your knowledge against surprise and ensuring you can deploy it flexibly. Good luck.

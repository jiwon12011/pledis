/* ================================================
   SUB PAGE — 공통 스크립트 (i18n 포함)
================================================ */

const subI18n = {
    KOR: {
        /* ── ARTIST ── */
        artist_intro_p: '플레디스 엔터테인먼트의 아티스트들은 저마다의 고유한 빛으로 전 세계 무대를 밝힙니다.<br>그들의 세계로 당신을 초대합니다.',
        tws_desc: '2024년 데뷔한 플레디스의 5세대 보이그룹. 6인조 그룹으로 \'반짝이는 청춘\'을 주제로 풋풋하고 생동감 넘치는 음악 세계를 선보입니다.',
        seventeen_desc: '2015년 데뷔한 13인조 자체 제작 아이돌 그룹. 보컬, 힙합, 퍼포먼스 유닛으로 구성되어 있으며 글로벌 K-POP 씬을 이끄는 아이콘입니다.',
        nuest_desc: '2012년 데뷔한 플레디스 대표 보이그룹. 탄탄한 음악성과 무대 퍼포먼스로 국내외 팬들의 사랑을 받고 있는 5인조 그룹입니다.',
        minhyun_desc: 'NU\'EST 리더 출신의 솔로 아티스트. 탁월한 보컬 실력과 배우 활동을 병행하며 멀티 엔터테이너로 자신만의 영역을 구축하고 있습니다.',
        afterschool_desc: '2009년 데뷔한 플레디스 대표 걸그룹. 강렬한 퍼포먼스와 독보적인 콘셉트로 국내외에서 큰 사랑을 받으며 K-POP 걸그룹 역사에 이름을 남겼습니다.',
        orangecaramel_desc: '애프터스쿨의 서브유닛. 2010년 데뷔 이후 유쾌하고 독창적인 콘셉트로 K-POP 팬들의 마음을 사로잡은 개성 넘치는 그룹입니다.',
        bumzu_desc: 'SEVENTEEN의 음악을 직접 작사·작곡·편곡하는 뮤지션. 다양한 장르를 넘나드는 음악적 역량으로 K-POP 프로듀싱 씬에서 독보적인 존재감을 발휘하고 있습니다.',

        /* ── NOTICE ── */
        tab_all: '전체',
        tab_notice: '공지사항',
        tab_schedule: '아티스트 스케줄',
        tab_goods: '굿즈 & 앨범',
        notice_pinned_title: '글로벌 탤런트 서치 2026 — 오디션 지원 기간이 연장되었습니다. (~ 2026.08.31)',
        notice_1: '플레디스 엔터테인먼트 공식 글로벌 SNS 채널 통합 운영 안내',
        notice_2: 'SEVENTEEN — 2026 WORLD TOUR \'FOLLOW THE SUN\' 일정 공개',
        notice_3: 'SEVENTEEN — 정규 5집 \'SPILL THE FEELS\' 발매 안내',
        notice_4: 'TWS — 2nd 미니앨범 컴백 쇼케이스 일정 발표',
        notice_5: 'TWS — 공식 응원봉 \'FORISTAR\' 2차 발매 안내',
        notice_6: '황민현 — 2026 단독 팬미팅 \'MINION\' 개최 안내',
        notice_7: 'SEVENTEEN — CARAT 봉 4세대 예약 판매 안내',
        notice_8: '플레디스 엔터테인먼트 서울 사무소 확장 이전 안내',
        notice_9: 'SEVENTEEN — MAMA Awards 2026 레드카펫 & 시상식 참석 확정',
        notice_10: 'TWS — 2nd 미니앨범 \'Still Growing Up\' 발매 안내',
        notice_11: '글로벌 탤런트 서치 2026 오디션 모집 공고',
        notice_12: '황민현 — 드라마 \'별이 빛나는 밤에\' OST 참여 및 발매 안내',

        /* ── AUDITION ── */
        audition_hero_sub: '플레디스 은하계의 다음 별, 당신을 찾습니다.',
        talent_sub: '재능의 형태는 다양합니다. 당신의 분야에서 지원하세요.',
        vocal_ko: '보컬',
        vocal_desc: '감성적인 음색과 탄탄한 보컬 실력을 갖춘 분. 장르 불문 자신만의 색깔을 가진 가수 지망생을 기다립니다.',
        dance_ko: '댄스',
        dance_desc: '강렬한 퍼포먼스와 무대 장악력을 지닌 분. 다양한 장르의 댄서 및 퍼포머를 찾습니다.',
        rap_ko: '랩',
        rap_desc: '독창적인 라임과 플로우로 자신만의 이야기를 전달할 수 있는 분. 작사 능력도 환영합니다.',
        multi_ko: '멀티',
        multi_desc: '보컬·댄스·랩을 복합적으로 소화하거나, 작곡·프로듀싱 능력을 겸비한 멀티 플레이어를 환영합니다.',
        process_sub: '3단계로 시작하는 당신의 플레디스 여정',
        step1_h: '온라인 지원',
        step1_p: '아래 지원 양식을 작성하고 포트폴리오와 함께 제출합니다.',
        step2_h: '서류 검토',
        step2_p: '담당자가 지원 서류를 검토한 후 합격자에게 개별 연락합니다. (약 2~4주 소요)',
        step3_h: '오디션 진행',
        step3_p: '서울 본사 또는 화상 오디션으로 진행됩니다. 최종 합격 시 계약 절차를 안내드립니다.',
        guide_title: '지원 안내',
        guide_q1: '지원 자격',
        guide_q2: '제출 서류',
        guide_q3: '지원 기간 및 방법',
        guide_q4: '개인정보 처리 방침',
        guide_body1: '<li>국적, 성별, 나이 제한 없이 누구나 지원 가능합니다.</li><li>만 14세 미만 지원자는 보호자 동의서를 함께 제출해야 합니다.</li><li>타 기획사 전속 계약 중인 분은 지원이 불가합니다.</li><li>해외 거주자는 화상 오디션으로 진행됩니다.</li>',
        guide_body2: '<li>지원서 (아래 양식 작성)</li><li>최근 3개월 이내 전신 사진 1장, 반신 사진 1장</li><li>자기소개 영상 (1~3분 / 보컬·댄스·랩 등 본인 역량 어필)</li><li>포트폴리오 링크 (YouTube, SoundCloud, SNS 등 가능)</li><li>수상 경력 또는 활동 이력 (선택)</li>',
        guide_body3: '지원 기간: 2026년 6월 1일 ~ 2026년 8월 31일 (연중 상시 접수)<br><br>지원 방법: 아래 온라인 지원 양식을 작성하여 제출해 주세요. 서류 검토 후 합격자에 한해 개별 연락을 드립니다. 미합격자에게는 별도로 연락하지 않습니다.',
        guide_body4: '제출된 개인정보는 오디션 심사 목적으로만 활용되며, 선발 완료 후 즉시 파기됩니다. 제3자에게 제공되지 않으며, 제출 서류의 반환은 불가합니다. 자세한 내용은 플레디스 개인정보 처리방침을 참고해 주세요.',
        form_title: '지원하기',
        form_desc: '아래 양식을 빠짐없이 작성해 주세요.<br>모든 항목은 오디션 심사에만 활용됩니다.',
        submit_btn: '지원서 제출하기 ↗',
        ty_title: '지원이 완료되었습니다!',
        ty_desc: '소중한 지원 감사드립니다.<br>서류 검토 후 합격자에 한해 개별 연락드립니다. (약 2~4주 소요)<br><br>궁금한 사항은 <strong>audition@pledis.co.kr</strong>로 문의해 주세요.',
        faq_q1: '나이 제한이 있나요?',
        faq_a1: '별도의 나이 제한은 없습니다. 단, 만 14세 미만 지원자의 경우 보호자 동의서를 함께 제출해 주셔야 합니다.',
        faq_q2: '해외에 거주 중인데 지원할 수 있나요?',
        faq_a2: '네, 가능합니다. 해외 거주자의 경우 서류 합격 후 화상 오디션(Zoom 등)으로 진행됩니다. 최종 합격 시 오프라인 대면 심사를 추가로 진행할 수 있습니다.',
        faq_q3: '이전에 불합격한 경우 재지원이 가능한가요?',
        faq_a3: '네, 재지원은 언제든지 가능합니다. 이전 결과와 관계없이 새롭게 평가됩니다. 더 발전된 모습으로 다시 도전해 주세요.',
        faq_q4: '심사 결과는 언제, 어떻게 통보되나요?',
        faq_a4: '서류 접수 후 약 2~4주 이내에 서류 합격자에 한해 기재하신 연락처(전화 또는 이메일)로 개별 연락드립니다. 미합격자에게는 별도 통보를 드리지 않습니다.',
        faq_q5: '트레이니 생활 중 학업은 어떻게 되나요?',
        faq_a5: '학업과 트레이닝을 병행할 수 있도록 적극 지원합니다. 학교 일정을 최대한 존중하며, 미성년자의 경우 학업 지속이 보장됩니다. 구체적인 사항은 계약 시 개별 협의합니다.',
        faq_q6: '댄스나 보컬 경험이 없어도 지원할 수 있나요?',
        faq_a6: '네, 경험보다 잠재력을 중요하게 봅니다. 음악에 대한 열정과 성장 가능성이 있다면 누구나 지원 가능합니다. 훈련을 통해 함께 성장할 수 있는 분을 환영합니다.'
    },
    ENG: {
        /* ── ARTIST ── */
        artist_intro_p: 'Pledis Entertainment artists illuminate stages around the world with their unique light.<br>We invite you into their world.',
        tws_desc: '5th-gen boy group from Pledis, debuted in 2024. The 6-member group presents a vibrant and youthful music world themed around \'sparkling youth.\'',
        seventeen_desc: 'A 13-member self-produced idol group that debuted in 2015. Composed of Vocal, Hip-hop, and Performance units — an icon leading the global K-POP scene.',
        nuest_desc: 'Pledis\' flagship boy group that debuted in 2012. The 5-member group is beloved by fans worldwide for their solid musicality and stage performances.',
        minhyun_desc: 'A solo artist and former leader of NU\'EST. He builds his own domain as a multi-entertainer, combining outstanding vocal skills with an acting career.',
        afterschool_desc: 'Pledis\' flagship girl group that debuted in 2009. Known for their intense performances and unique concepts, they have made their mark in K-POP history.',
        orangecaramel_desc: 'A sub-unit of After School. Since their debut in 2010, they have captured the hearts of K-POP fans with fun and original concepts.',
        bumzu_desc: 'A musician who directly writes, composes, and arranges music for SEVENTEEN. He demonstrates an unrivaled presence in the K-POP producing scene.',

        /* ── NOTICE ── */
        tab_all: 'All',
        tab_notice: 'Notice',
        tab_schedule: 'Artist Schedule',
        tab_goods: 'Goods & Album',
        notice_pinned_title: 'Global Talent Search 2026 — The audition application period has been extended. (~ 2026.08.31)',
        notice_1: 'Notice on Integrated Operation of Official Global SNS Channels',
        notice_2: 'SEVENTEEN — 2026 WORLD TOUR \'FOLLOW THE SUN\' Schedule Released',
        notice_3: 'SEVENTEEN — Full Album Vol. 5 \'SPILL THE FEELS\' Release Notice',
        notice_4: 'TWS — 2nd Mini Album Comeback Showcase Schedule Announced',
        notice_5: 'TWS — Official Lightstick \'FORISTAR\' 2nd Sale Notice',
        notice_6: 'Hwang Min Hyun — 2026 Solo Fan Meeting \'MINION\' Announcement',
        notice_7: 'SEVENTEEN — CARAT Bong 4th Gen Pre-Order Notice',
        notice_8: 'Notice on Expansion and Relocation of Pledis Entertainment Seoul Office',
        notice_9: 'SEVENTEEN — Confirmed Attendance at MAMA Awards 2026 Red Carpet & Ceremony',
        notice_10: 'TWS — 2nd Mini Album \'Still Growing Up\' Release Notice',
        notice_11: 'Global Talent Search 2026 Audition Recruitment Announcement',
        notice_12: 'Hwang Min Hyun — OST Participation & Release Notice for Drama \'Starry Night\'',

        /* ── AUDITION ── */
        audition_hero_sub: 'We are looking for you — the next star in the Pledis universe.',
        talent_sub: 'Talent comes in many forms. Apply in your field.',
        vocal_ko: 'Vocal',
        vocal_desc: 'Looking for those with an emotional tone and strong vocal skills. We welcome aspiring singers with their own unique color, regardless of genre.',
        dance_ko: 'Dance',
        dance_desc: 'Looking for those with intense performances and powerful stage presence. We are recruiting dancers and performers of all genres.',
        rap_ko: 'Rap',
        rap_desc: 'Looking for those who can tell their own story with original rhymes and flow. Songwriting ability is also welcome.',
        multi_ko: 'Multi',
        multi_desc: 'We welcome multi-players who can handle vocals, dance, and rap, or who also have songwriting and producing abilities.',
        process_sub: 'Your Pledis journey begins in 3 steps.',
        step1_h: 'Online Application',
        step1_p: 'Fill out the application form below and submit it along with your portfolio.',
        step2_h: 'Document Review',
        step2_p: 'Our team will review your application and contact successful applicants individually. (Approx. 2–4 weeks)',
        step3_h: 'Audition',
        step3_p: 'Conducted at our Seoul headquarters or via video call. Upon final acceptance, we will guide you through the contract process.',
        guide_title: 'Application Guide',
        guide_q1: 'Eligibility',
        guide_q2: 'Required Documents',
        guide_q3: 'Application Period & Method',
        guide_q4: 'Privacy Policy',
        guide_body1: '<li>Anyone can apply regardless of nationality, gender, or age.</li><li>Applicants under the age of 14 must submit a guardian consent form.</li><li>Those currently under an exclusive contract with another agency are not eligible.</li><li>Overseas residents will proceed with a video audition.</li>',
        guide_body2: '<li>Application form (fill out the form below)</li><li>1 full-body photo and 1 half-body photo taken within the last 3 months</li><li>Self-introduction video (1–3 min / showcasing your vocal, dance, rap, etc.)</li><li>Portfolio link (YouTube, SoundCloud, SNS, etc. accepted)</li><li>Awards or activity history (optional)</li>',
        guide_body3: 'Application Period: June 1, 2026 ~ August 31, 2026 (Year-round)<br><br>How to Apply: Fill out the online application form below and submit. Only those who pass document screening will be contacted individually. Those who do not pass will not be notified separately.',
        guide_body4: 'Submitted personal information will be used solely for audition evaluation and destroyed immediately after selection. It will not be shared with third parties, and submitted documents cannot be returned. Please refer to the Pledis Entertainment Privacy Policy for details.',
        form_title: 'Apply Now',
        form_desc: 'Please fill out all fields below.<br>All information is used solely for audition evaluation purposes.',
        submit_btn: 'Submit Application ↗',
        ty_title: 'Application Complete!',
        ty_desc: 'Thank you for applying.<br>Only successful applicants will be contacted individually after document review. (Approx. 2–4 weeks)<br><br>For inquiries, please contact <strong>audition@pledis.co.kr</strong>.',
        faq_q1: 'Is there an age limit?',
        faq_a1: 'There is no age limit. However, applicants under the age of 14 must submit a guardian consent form.',
        faq_q2: 'Can I apply if I live overseas?',
        faq_a2: 'Yes, you can. Overseas applicants will proceed with a video audition (via Zoom, etc.) after passing the document screening. If you pass the final round, an additional in-person evaluation may be conducted.',
        faq_q3: 'Can I reapply if I was previously rejected?',
        faq_a3: 'Yes, you can reapply at any time. You will be evaluated fresh, regardless of previous results. Please come back with an even more improved performance.',
        faq_q4: 'When and how will I be notified of the results?',
        faq_a4: 'Within approximately 2–4 weeks, only those who pass the document screening will be contacted individually via the provided contact information (phone or email). Those who do not pass will not be notified separately.',
        faq_q5: 'How is schooling handled during trainee life?',
        faq_a5: 'We actively support balancing studies with training. School schedules are respected as much as possible, and minors are guaranteed to continue their education. Specific details will be discussed individually at the time of contract.',
        faq_q6: 'Can I apply even without dance or vocal experience?',
        faq_a6: 'Yes, we value potential over experience. Anyone with a passion for music and the ability to grow is welcome to apply. We welcome those who can grow together through training.'
    },
    JPN: {
        /* ── ARTIST ── */
        artist_intro_p: 'PLEDISエンタテインメントのアーティストたちは、それぞれ固有の輝きで世界の舞台を照らします。<br>彼らの世界へ、あなたをご招待します。',
        tws_desc: '2024年デビューのPLEDIS第5世代ボーイグループ。6人組で「輝く青春」をテーマに、みずみずしく躍動感あふれる音楽世界を展開しています。',
        seventeen_desc: '2015年デビューの13人組自主制作アイドルグループ。ボーカル、ヒップホップ、パフォーマンスの3ユニット制で、グローバルK-POPシーンをリードするアイコンです。',
        nuest_desc: '2012年デビューのPLEDIS代表ボーイグループ。確かな音楽性とステージパフォーマンスで国内外のファンに愛される5人組グループです。',
        minhyun_desc: 'NU\'ESTのリーダー出身のソロアーティスト。卓越したボーカル力と俳優活動を並行し、マルチエンタテイナーとして独自の領域を築いています。',
        afterschool_desc: '2009年デビューのPLEDIS代表ガールグループ。強烈なパフォーマンスと独自のコンセプトで国内外で大きな愛を受け、K-POPガールグループ史に名を刻みました。',
        orangecaramel_desc: 'アフタースクールのサブユニット。2010年のデビュー以来、ユニークで個性的なコンセプトでK-POPファンを魅了し続けています。',
        bumzu_desc: 'SEVENTEENの音楽を直接作詞・作曲・編曲するミュージシャン。様々なジャンルを横断する音楽的力量でK-POPプロデューシングシーンで独自の存在感を発揮しています。',

        /* ── NOTICE ── */
        tab_all: 'すべて',
        tab_notice: 'お知らせ',
        tab_schedule: 'アーティスト スケジュール',
        tab_goods: 'グッズ & アルバム',
        notice_pinned_title: 'グローバルタレントサーチ2026 — オーディション応募期間が延長されました。(〜 2026.08.31)',
        notice_1: '公式グローバルSNSチャンネル統合運営のご案内',
        notice_2: 'SEVENTEEN — 2026ワールドツアー\'FOLLOW THE SUN\'日程公開',
        notice_3: 'SEVENTEEN — 5thフルアルバム\'SPILL THE FEELS\'発売のご案内',
        notice_4: 'TWS — 2ndミニアルバムカムバックショーケース日程発表',
        notice_5: 'TWS — 公式ペンライト\'FORISTAR\' 2次販売のご案内',
        notice_6: 'ファン・ミンヒョン — 2026ソロファンミーティング\'MINION\'開催のご案内',
        notice_7: 'SEVENTEEN — キャロット棒4世代予約販売のご案内',
        notice_8: 'PLEDISエンタテインメント ソウル事務所 拡張移転のご案内',
        notice_9: 'SEVENTEEN — MAMA Awards 2026 レッドカーペット＆授賞式参加確定',
        notice_10: 'TWS — 2ndミニアルバム\'Still Growing Up\'発売のご案内',
        notice_11: 'グローバルタレントサーチ2026 オーディション募集公告',
        notice_12: 'ファン・ミンヒョン — ドラマ\'星が輝く夜に\'OST参加＆発売のご案内',

        /* ── AUDITION ── */
        audition_hero_sub: 'PLEDISの銀河系の次の星、あなたを探しています。',
        talent_sub: '才能の形は様々です。あなたの分野でご応募ください。',
        vocal_ko: 'ボーカル',
        vocal_desc: '感性豊かな音色と確かなボーカル力をお持ちの方。ジャンル問わず、自分だけの色を持つ歌手志望の方をお待ちしています。',
        dance_ko: 'ダンス',
        dance_desc: '強烈なパフォーマンスとステージ掌握力をお持ちの方。様々なジャンルのダンサー及びパフォーマーを探しています。',
        rap_ko: 'ラップ',
        rap_desc: '独創的なライムとフロウで自分だけのストーリーを伝えられる方。作詞能力も歓迎します。',
        multi_ko: 'マルチ',
        multi_desc: 'ボーカル・ダンス・ラップを複合的にこなすか、作曲・プロデュース能力も兼ね備えたマルチプレイヤーを歓迎します。',
        process_sub: '3ステップで始まるあなたのPLEDISへの旅。',
        step1_h: 'オンライン応募',
        step1_p: '下記の応募フォームを記入し、ポートフォリオと一緒に提出してください。',
        step2_h: '書類審査',
        step2_p: '担当者が応募書類を審査後、合格者に個別にご連絡します。（約2〜4週間）',
        step3_h: 'オーディション',
        step3_p: 'ソウル本社またはビデオオーディションで実施されます。最終合格の際は契約手続きをご案内します。',
        guide_title: '応募案内',
        guide_q1: '応募資格',
        guide_q2: '提出書類',
        guide_q3: '応募期間と方法',
        guide_q4: '個人情報処理方針',
        guide_body1: '<li>国籍・性別・年齢を問わず、どなたでも応募できます。</li><li>満14歳未満の応募者は保護者の同意書を一緒に提出してください。</li><li>他の芸能事務所と専属契約中の方は応募できません。</li><li>海外在住者はビデオオーディションで進行されます。</li>',
        guide_body2: '<li>応募書類（下記フォームに記入）</li><li>直近3ヶ月以内の全身写真1枚・上半身写真1枚</li><li>自己紹介動画（1〜3分 / ボーカル・ダンス・ラップなどをアピール）</li><li>ポートフォリオリンク（YouTube、SoundCloud、SNS等可）</li><li>受賞歴または活動履歴（任意）</li>',
        guide_body3: '応募期間：2026年6月1日〜2026年8月31日（年中随時受付）<br><br>応募方法：下記のオンライン応募フォームにご記入の上ご提出ください。書類審査後、合格者のみ個別にご連絡します。不合格の方には別途ご連絡いたしません。',
        guide_body4: 'ご提出いただいた個人情報はオーディション審査目的のみに使用され、選抜完了後すみやかに廃棄されます。第三者への提供はなく、提出書類の返却はできません。詳細はPLEDISエンタテインメントの個人情報処理方針をご参照ください。',
        form_title: '今すぐ応募',
        form_desc: '以下の項目をすべてご記入ください。<br>すべての情報はオーディション審査のみに使用されます。',
        submit_btn: '応募書類を提出する ↗',
        ty_title: '応募が完了しました！',
        ty_desc: 'ご応募いただきありがとうございます。<br>書類審査後、合格者のみ個別にご連絡します。（約2〜4週間）<br><br>ご不明な点は <strong>audition@pledis.co.kr</strong> までお問い合わせください。',
        faq_q1: '年齢制限はありますか？',
        faq_a1: '年齢制限はございません。ただし、満14歳未満の応募者は保護者の同意書を一緒に提出していただく必要があります。',
        faq_q2: '海外に在住していますが、応募できますか？',
        faq_a2: 'はい、可能です。海外在住者の場合、書類合格後にビデオオーディション（Zoomなど）で進められます。最終合格の際はオフラインの対面審査が追加で行われる場合があります。',
        faq_q3: '以前に不合格だった場合、再応募できますか？',
        faq_a3: 'はい、いつでも再応募できます。以前の結果に関わらず、新たに評価されます。より成長した姿でぜひ再挑戦してください。',
        faq_q4: '審査結果はいつ、どのように通知されますか？',
        faq_a4: '書類受付後、約2〜4週間以内に書類合格者のみ、ご記入いただいた連絡先（電話またはメール）に個別にご連絡します。不合格の方には別途ご連絡いたしません。',
        faq_q5: '練習生生活中の学業はどうなりますか？',
        faq_a5: '学業とトレーニングを両立できるよう積極的に支援します。学校の日程を最大限尊重し、未成年者の場合は学業継続が保証されます。具体的な事項は契約時に個別に協議します。',
        faq_q6: 'ダンスやボーカルの経験がなくても応募できますか？',
        faq_a6: 'はい、経験より潜在力を重視します。音楽への情熱と成長の可能性があれば、どなたでも応募できます。トレーニングを通じて一緒に成長できる方を歓迎します。'
    },
    CHN: {
        /* ── ARTIST ── */
        artist_intro_p: 'PLEDIS娱乐的艺人们以各自独特的光芒照亮全球舞台。<br>诚邀您走进他们的世界。',
        tws_desc: '2024年出道的PLEDIS第五代男团，共6名成员，以"闪耀青春"为主题，呈现充满活力与朝气的音乐世界。',
        seventeen_desc: '2015年出道的13人自制偶像团体，由声乐、说唱、表演三个小分队组成，是引领全球K-POP潮流的标志性团体。',
        nuest_desc: '2012年出道的PLEDIS代表男团，以扎实的音乐性和舞台表演力深受国内外粉丝喜爱的5人组合。',
        minhyun_desc: '前NU\'EST队长出身的个人艺人，凭借出色的声乐实力与演员活动并行，作为多栖艺人开辟了属于自己的领域。',
        afterschool_desc: '2009年出道的PLEDIS代表女团，以强烈的表演和独特的概念深受国内外粉丝喜爱，在K-POP女团历史上留下了深刻印记。',
        orangecaramel_desc: 'After School的子单位，自2010年出道以来，以欢快独特的概念俘获了众多K-POP粉丝的心，是个性十足的团体。',
        bumzu_desc: '亲自为SEVENTEEN创作歌词、作曲、编曲的音乐人，以跨越多种曲风的音乐才华，在K-POP制作领域展现出无可替代的存在感。',

        /* ── NOTICE ── */
        tab_all: '全部',
        tab_notice: '公告',
        tab_schedule: '艺人日程',
        tab_goods: '周边 & 专辑',
        notice_pinned_title: '全球达人搜索2026 — 试镜报名期限已延长。(~ 2026.08.31)',
        notice_1: '官方全球社交媒体渠道统一运营通知',
        notice_2: 'SEVENTEEN — 2026世界巡演\'FOLLOW THE SUN\'日程公布',
        notice_3: 'SEVENTEEN — 正规5辑\'SPILL THE FEELS\'发行通知',
        notice_4: 'TWS — 第2张迷你专辑回归发布会日程公布',
        notice_5: 'TWS — 官方荧光棒\'FORISTAR\'第2次发售通知',
        notice_6: '黄旼炫 — 2026年个人粉丝见面会\'MINION\'举办通知',
        notice_7: 'SEVENTEEN — CARAT棒第4代预售通知',
        notice_8: 'PLEDIS娱乐首尔办公室扩建迁址通知',
        notice_9: 'SEVENTEEN — 确认参加MAMA Awards 2026红毯及颁奖典礼',
        notice_10: 'TWS — 第2张迷你专辑\'Still Growing Up\'发行通知',
        notice_11: '全球达人搜索2026试镜招募公告',
        notice_12: '黄旼炫 — 参与电视剧《繁星闪耀之夜》OST及发行通知',

        /* ── AUDITION ── */
        audition_hero_sub: '寻找PLEDIS星河中的下一颗星——就是你。',
        talent_sub: '才华的形式多种多样，请在您擅长的领域报名。',
        vocal_ko: '人声',
        vocal_desc: '寻找拥有富有感情的音色与扎实歌唱实力的人才。不限曲风，欢迎有独特风格的歌手志愿者。',
        dance_ko: '舞蹈',
        dance_desc: '寻找拥有强烈表演力与舞台掌控力的人才。招募各种曲风的舞蹈家及表演者。',
        rap_ko: '说唱',
        rap_desc: '寻找能以独创的押韵和节奏讲述自己故事的人才，同时欢迎具备作词能力者。',
        multi_ko: '多栖',
        multi_desc: '欢迎能够综合驾驭声乐、舞蹈、说唱，或同时具备作曲、制作能力的多栖选手。',
        process_sub: '3步开启您的PLEDIS之旅。',
        step1_h: '在线报名',
        step1_p: '填写下方报名表并连同作品集一起提交。',
        step2_h: '材料审核',
        step2_p: '工作人员审核报名材料后，将单独联系合格者。（约需2~4周）',
        step3_h: '试镜进行',
        step3_p: '在首尔总部或视频方式进行。最终合格后将指引您完成签约流程。',
        guide_title: '报名须知',
        guide_q1: '报名资格',
        guide_q2: '所需材料',
        guide_q3: '报名期间及方式',
        guide_q4: '个人信息处理方针',
        guide_body1: '<li>无国籍、性别、年龄限制，任何人均可报名。</li><li>未满14岁的申请者须一并提交监护人同意书。</li><li>目前与其他经纪公司签有专属合同者不可报名。</li><li>海外居住者将进行视频试镜。</li>',
        guide_body2: '<li>报名表（填写下方表格）</li><li>近3个月内全身照1张、半身照1张</li><li>自我介绍视频（1~3分钟 / 展示声乐、舞蹈、说唱等才能）</li><li>作品集链接（YouTube、SoundCloud、SNS等均可）</li><li>获奖经历或活动履历（选填）</li>',
        guide_body3: '报名期间：2026年6月1日 ~ 2026年8月31日（全年常时接受报名）<br><br>报名方式：请填写下方在线报名表并提交。材料审核后，仅对合格者进行单独通知。未通过者将不另行告知。',
        guide_body4: '提交的个人信息仅用于试镜审核目的，选拔完成后将立即销毁。不会提供给第三方，且提交的材料不可退还。详情请参阅PLEDIS娱乐个人信息处理方针。',
        form_title: '立即报名',
        form_desc: '请完整填写以下所有项目。<br>所有信息仅用于试镜审核目的。',
        submit_btn: '提交报名表 ↗',
        ty_title: '报名已完成！',
        ty_desc: '感谢您的报名。<br>材料审核后，仅对合格者进行单独通知。（约需2~4周）<br><br>如有疑问，请联系 <strong>audition@pledis.co.kr</strong>。',
        faq_q1: '有年龄限制吗？',
        faq_a1: '没有年龄限制。但未满14岁的申请者须一并提交监护人同意书。',
        faq_q2: '居住在海外也可以报名吗？',
        faq_a2: '可以的。海外居住者在通过材料审核后，将进行视频试镜（Zoom等）。最终合格时，可能还需要进行线下面试。',
        faq_q3: '之前落选的话可以重新报名吗？',
        faq_a3: '可以，随时均可重新报名。不论之前的结果如何，都将重新进行评估。请以更进步的面貌再次挑战！',
        faq_q4: '审核结果何时以何种方式通知？',
        faq_a4: '提交材料后约2~4周内，仅对通过材料审核的申请者，通过所填写的联系方式（电话或邮件）进行单独通知。未通过者将不另行告知。',
        faq_q5: '成为练习生期间，学业方面如何安排？',
        faq_a5: '我们积极支持学业与训练并行，最大程度尊重学校日程，未成年者的学业将得到保障。具体事项将在签约时个别协商。',
        faq_q6: '没有舞蹈或演唱经验也可以报名吗？',
        faq_a6: '可以，我们更看重潜力而非经验。只要对音乐充满热情且具备成长可能性，任何人都可以报名。我们欢迎能通过培训共同成长的人。'
    }
};

const subLangKeys = ['KOR','ENG','JPN','CHN'];
let currentSubLang = localStorage.getItem('pledisLang') || 'KOR';

function setSubLang(lang) {
    currentSubLang = lang;
    localStorage.setItem('pledisLang', lang);
    const dict = subI18n[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    const idx = subLangKeys.indexOf(lang);
    $('.lang li').removeClass('active').eq(idx).addClass('active');
    $('.mobile_lang_list li').removeClass('active').eq(idx).addClass('active');
}

$(function(){

    // 저장된 언어 복원
    if(currentSubLang !== 'KOR') setSubLang(currentSubLang);

    /* ── Fade-up observer ── */
    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(function(el){
        observer.observe(el);
    });

    /* ── Header scroll ── */
    $(window).on('scroll', function(){
        $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    /* ── Hamburger ── */
    $('.hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('#mobileNav').toggleClass('open');
        $('body').toggleClass('nav-open');
    });
    $('#mobileNav .mobile_nav_list a').on('click', function(){
        $('.hamburger').removeClass('open');
        $('#mobileNav').removeClass('open');
        $('body').removeClass('nav-open');
    });

    /* ── 언어 전환 (데스크탑 & 모바일 싱크) ── */
    $('.lang li').on('click', function(){
        const idx = $(this).index();
        $('.lang li').removeClass('active');
        $(this).addClass('active');
        $('.mobile_lang_list li').removeClass('active').eq(idx).addClass('active');
        setSubLang(subLangKeys[idx]);
    });
    $('.mobile_lang_list li').on('click', function(){
        const idx = $(this).index();
        $('.mobile_lang_list li').removeClass('active');
        $(this).addClass('active');
        $('.lang li').removeClass('active').eq(idx).addClass('active');
        setSubLang(subLangKeys[idx]);
    });

    /* ── Spark 애니메이션 ── */
    const sparkAnims = ['spark_twinkle','spark_pulse','spark_drift','spark_shake'];
    document.querySelectorAll('.spark').forEach(function(el){
        el.style.animationName     = sparkAnims[Math.floor(Math.random() * sparkAnims.length)];
        el.style.animationDuration = (2.8 + Math.random() * 3).toFixed(2) + 's';
        el.style.animationDelay    = (Math.random() * 5).toFixed(2) + 's';
    });
    document.querySelectorAll('.spark-line').forEach(function(el){
        el.style.animationDuration = (4 + Math.random() * 4).toFixed(2) + 's';
        el.style.animationDelay    = (Math.random() * 6).toFixed(2) + 's';
    });

    /* ── Notice 탭 필터 ── */
    if($('.notice_tab_btn').length){
        $('.notice_tab_btn').on('click', function(){
            const cat = $(this).data('cat');
            $('.notice_tab_btn').removeClass('active');
            $(this).addClass('active');
            if(cat === 'all'){
                $('.notice_item').show();
            } else {
                $('.notice_item').hide();
                $('.notice_item[data-cat="' + cat + '"]').show();
            }
        });
    }

    /* ── FAQ 아코디언 ── */
    if($('.faq_item').length){
        $('.faq_q').on('click', function(){
            const $item = $(this).closest('.faq_item');
            const isOpen = $item.hasClass('open');
            $('.faq_item').removeClass('open').find('.faq_a').slideUp(240);
            if(!isOpen){
                $item.addClass('open');
                $item.find('.faq_a').slideDown(240);
            }
        });
    }

    /* ── 지원 안내 아코디언 ── */
    if($('.guide_item').length){
        $('.guide_q').on('click', function(){
            const $item = $(this).closest('.guide_item');
            $item.toggleClass('open');
            $item.find('.guide_body').slideToggle(220);
        });
    }

    /* ── 오디션 폼 제출 ── */
    if($('#auditionForm').length){
        $('#auditionForm').on('submit', function(e){
            e.preventDefault();
            $(this).hide();
            $('#formThankYou').fadeIn(400);
        });
    }

});

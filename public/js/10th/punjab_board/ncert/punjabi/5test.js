const questions = [
        
                {
                  "num": 1,
                  "question_en": "Who is considered the father of modern Punjabi poetry?",
                  "question_pa": "ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾਮਾ ਕਿਸ ਨੂੰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Amrita Pritam", "Shiv Kumar Batalvi", "Pash"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਪਾਸ਼"],
                  "answer_en": "Bhai Vir Singh",
                  "answer_pa": "ਭਾਈ ਵੀਰ ਸਿੰਘ"
                },
                {
                  "num": 2,
                  "question_en": "Which work is written by Amrita Pritam?",
                  "question_pa": "ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Sunehray", "Pinjar", "Loona", "Jangal di Rani"],
                  "options_pa": ["ਸੁਨੇਹੜੇ", "ਪਿੰਜਰ", "ਲੂਣਾ", "ਜੰਗਲ ਦੀ ਰਾਣੀ"],
                  "answer_en": "Pinjar",
                  "answer_pa": "ਪਿੰਜਰ"
                },
                {
                  "num": 3,
                  "question_en": "What is the plural form of 'ਪੁਸਤਕ' (book)?",
                  "question_pa": "'ਪੁਸਤਕ' ਦਾ ਬਹੁਵਚਨ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
                  "options_pa": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
                  "answer_en": "ਪੁਸਤਕਾਂ",
                  "answer_pa": "ਪੁਸਤਕਾਂ"
                },
                {
                  "num": 4,
                  "question_en": "Which river is known as Punjab's lifeline?",
                  "question_pa": "ਕਿਹੜੀ ਨਦੀ ਨੂੰ ਪੰਜਾਬ ਦੀ ਜੀਵਨ-ਰੇਖਾ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Beas", "Chenab", "Sutlej", "Ravi"],
                  "options_pa": ["ਬਿਆਸ", "ਚਨਾਬ", "ਸਤਲੁਜ", "ਰਾਵੀ"],
                  "answer_en": "Sutlej",
                  "answer_pa": "ਸਤਲੁਜ"
                },
                {
                  "num": 5,
                  "question_en": "Identify the figure of speech: 'ਚੰਦਾ ਮੁਸਕਰਾਇਆ'",
                  "question_pa": "ਅਲੰਕਾਰ ਪਛਾਣੋ: 'ਚੰਦਾ ਮੁਸਕਰਾਇਆ'",
                  "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                  "options_pa": ["ਉਪਮਾ", "ਰੂਪਕ", "ਮਨੁੱਖੀਕਰਣ", "ਅਤਿਸ਼ਯੋਕਤੀ"],
                  "answer_en": "Personification",
                  "answer_pa": "ਮਨੁੱਖੀਕਰਣ"
                },
                {
                  "num": 6,
                  "question_en": "What is the feminine of 'ਸ਼ੇਰ' (lion)?",
                  "question_pa": "'ਸ਼ੇਰ' ਦੀ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਸ਼ੇਰਨੀ", "ਸ਼ੇਰਾ", "ਸ਼ੇਰੀ", "ਸ਼ੇਰਣ"],
                  "options_pa": ["ਸ਼ੇਰਨੀ", "ਸ਼ੇਰਾ", "ਸ਼ੇਰੀ", "ਸ਼ੇਰਣ"],
                  "answer_en": "ਸ਼ੇਰਨੀ",
                  "answer_pa": "ਸ਼ੇਰਨੀ"
                },
                {
                  "num": 7,
                  "question_en": "Which poet wrote 'Main ek boli da kavi haan'?",
                  "question_pa": "'ਮੈਂ ਇੱਕ ਬੋਲੀ ਦਾ ਕਵੀ ਹਾਂ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Pash", "Surjit Patar", "Amrita Pritam", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 8,
                  "question_en": "What is the meaning of 'ਦਿਲ ਟੁੱਟਣਾ'?",
                  "question_pa": "'ਦਿਲ ਟੁੱਟਣਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To be happy", "To be heartbroken", "To be angry", "To be jealous"],
                  "options_pa": ["ਖੁਸ਼ ਹੋਣਾ", "ਦਿਲ ਟੁੱਟਣਾ", "ਗੁੱਸਾ ਹੋਣਾ", "ਈਰਖਾ ਕਰਨੀ"],
                  "answer_en": "To be heartbroken",
                  "answer_pa": "ਦਿਲ ਟੁੱਟਣਾ"
                },
                {
                  "num": 9,
                  "question_en": "Which is an example of 'Tatpurush Samas'?",
                  "question_pa": "'ਤਤਪੁਰਖ ਸਮਾਸ' ਦੀ ਉਦਾਹਰਣ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "options_pa": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "answer_en": "ਗੰਗਾ-ਜਲ",
                  "answer_pa": "ਗੰਗਾ-ਜਲ"
                },
                {
                  "num": 10,
                  "question_en": "Who composed 'Lok Geet' in Punjabi literature?",
                  "question_pa": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ 'ਲੋਕ ਗੀਤ' ਕਿਸ ਨੇ ਰਚੇ?",
                  "options_en": ["Bulleh Shah", "Waris Shah", "Traditional Folk", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ ਸ਼ਾਹ", "ਲੋਕ-ਪਰੰਪਰਾ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"],
                  "answer_en": "Traditional Folk",
                  "answer_pa": "ਲੋਕ-ਪਰੰਪਰਾ"
                },
                {
                  "num": 11,
                  "question_en": "What is the masculine of 'ਗਾਂ' (cow)?",
                  "question_pa": "'ਗਾਂ' ਦਾ ਪੁਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਬੱਕਰਾ", "ਬਲਦ", "ਭੈਂਸਾ", "ਗਾਈ"],
                  "options_pa": ["ਬੱਕਰਾ", "ਬਲਦ", "ਭੈਂਸਾ", "ਗਾਈ"],
                  "answer_en": "ਬਲਦ",
                  "answer_pa": "ਬਲਦ"
                },
                {
                  "num": 12,
                  "question_en": "Which figure of speech is in 'ਪਹਾੜ ਜਿਹਾ ਦੇਹ'?",
                  "question_pa": "'ਪਹਾੜ ਜਿਹਾ ਦੇਹ' ਵਿੱਚ ਕਿਹੜਾ ਅਲੰਕਾਰ ਹੈ?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                  "options_pa": ["ਉਪਮਾ", "ਰੂਪਕ", "ਮਨੁੱਖੀਕਰਣ", "ਅਤਿਸ਼ਯੋਕਤੀ"],
                  "answer_en": "Simile",
                  "answer_pa": "ਉਪਮਾ"
                },
                {
                  "num": 13,
                  "question_en": "What is the meaning of 'ਹੱਥ ਪੈਰ ਮਾਰਨਾ'?",
                  "question_pa": "'ਹੱਥ ਪੈਰ ਮਾਰਨਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To work hard", "To be restless", "To fight", "To celebrate"],
                  "options_pa": ["ਮਿਹਨਤ ਕਰਨੀ", "ਬੇਚੈਨ ਹੋਣਾ", "ਲੜਾਈ ਕਰਨੀ", "ਖੁਸ਼ੀ ਮਨਾਉਣੀ"],
                  "answer_en": "To be restless",
                  "answer_pa": "ਬੇਚੈਨ ਹੋਣਾ"
                },
                {
                  "num": 14,
                  "question_en": "Which is the correct 'Karan Karak' in 'ਰਾਮ ਨੇ ਫਲ ਖਾਧੇ'?",
                  "question_pa": "'ਰਾਮ ਨੇ ਫਲ ਖਾਧੇ' ਵਿੱਚ 'ਕਰਨ ਕਾਰਕ' ਕੀ ਹੈ?",
                  "options_en": ["ਰਾਮ", "ਨੇ", "ਫਲ", "ਖਾਧੇ"],
                  "options_pa": ["ਰਾਮ", "ਨੇ", "ਫਲ", "ਖਾਧੇ"],
                  "answer_en": "ਫਲ",
                  "answer_pa": "ਫਲ"
                },
                {
                  "num": 15,
                  "question_en": "Who wrote 'Jangal di Rani'?",
                  "question_pa": "'ਜੰਗਲ ਦੀ ਰਾਣੀ' ਕਿਸ ਨੇ ਲਿਖੀ?",
                  "options_en": ["Amrita Pritam", "Mohinder Singh Sarna", "Dalip Kaur Tiwana", "Nanak Singh"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਮੋਹਿੰਦਰ ਸਿੰਘ ਸਰਨਾ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ", "ਨਾਨਕ ਸਿੰਘ"],
                  "answer_en": "Mohinder Singh Sarna",
                  "answer_pa": "ਮੋਹਿੰਦਰ ਸਿੰਘ ਸਰਨਾ"
                },
                {
                  "num": 16,
                  "question_en": "What is the plural of 'ਘੋੜਾ' (horse)?",
                  "question_pa": "'ਘੋੜਾ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਘੋੜੇ", "ਘੋੜਾਂ", "ਘੋੜੀ", "ਘੋੜ"],
                  "options_pa": ["ਘੋੜੇ", "ਘੋੜਾਂ", "ਘੋੜੀ", "ਘੋੜ"],
                  "answer_en": "ਘੋੜੇ",
                  "answer_pa": "ਘੋੜੇ"
                },
                {
                  "num": 17,
                  "question_en": "Which poet is called 'Birha da Sultan'?",
                  "question_pa": "ਕਿਸ ਕਵੀ ਨੂੰ 'ਵਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Amrita Pritam", "Pash", "Shiv Kumar Batalvi", "Bulleh Shah"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 18,
                  "question_en": "What is the meaning of 'ਅੱਖਾਂ ਚਰਾਉਣਾ'?",
                  "question_pa": "'ਅੱਖਾਂ ਚਰਾਉਣਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To admire", "To be jealous", "To ignore", "To cry"],
                  "options_pa": ["ਪ੍ਰਸ਼ੰਸਾ ਕਰਨੀ", "ਈਰਖਾ ਕਰਨੀ", "ਅਣਗਹਿਲੀ ਕਰਨੀ", "ਰੋਣਾ"],
                  "answer_en": "To be jealous",
                  "answer_pa": "ਈਰਖਾ ਕਰਨੀ"
                },
                {
                  "num": 19,
                  "question_en": "Which is a 'Dwand Samas'?",
                  "question_pa": "ਕਿਹੜਾ 'ਦਵੰਦ ਸਮਾਸ' ਹੈ?",
                  "options_en": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "options_pa": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "answer_en": "ਰਾਜ-ਪਾਟ",
                  "answer_pa": "ਰਾਜ-ਪਾਟ"
                },
                {
                  "num": 20,
                  "question_en": "What is the feminine of 'ਮੁੰਡਾ' (boy)?",
                  "question_pa": "'ਮੁੰਡਾ' ਦੀ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਭੈਣ"],
                  "options_pa": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਭੈਣ"],
                  "answer_en": "ਮੁੰਡੀ",
                  "answer_pa": "ਮੁੰਡੀ"
                },
                {
                  "num": 21,
                  "question_en": "Which poet is associated with Naxalite movement?",
                  "question_pa": "ਕਿਹੜਾ ਕਵੀ ਨਕਸਲੀ ਲਹਿਰ ਨਾਲ ਜੁੜਿਆ ਹੈ?",
                  "options_en": ["Amrita Pritam", "Pash", "Shiv Kumar Batalvi", "Bhai Vir Singh"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਭਾਈ ਵੀਰ ਸਿੰਘ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 22,
                  "question_en": "What is the meaning of 'ਕਰਮ ਕਾਰਕ'?",
                  "question_pa": "'ਕਰਮ ਕਾਰਕ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["Subject of action", "Object of action", "Instrument of action", "Location of action"],
                  "options_pa": ["ਕਰਤਾ", "ਕਰਮ", "ਕਰਣ", "ਅਧਿਕਰਣ"],
                  "answer_en": "Object of action",
                  "answer_pa": "ਕਰਮ"
                },
                {
                  "num": 23,
                  "question_en": "Which is the correct 'Samas' for 'ਰਾਜਾ ਦਾ ਪੁੱਤਰ'?",
                  "question_pa": "'ਰਾਜਾ ਦਾ ਪੁੱਤਰ' ਲਈ ਸਹੀ ਸਮਾਸ ਕਿਹੜਾ ਹੈ?",
                  "options_en": ["ਰਾਜਪੁੱਤਰ", "ਰਾਜ-ਪੁੱਤਰ", "ਰਾਜਪੁਤਰ", "ਰਾਜ ਪੁੱਤਰ"],
                  "options_pa": ["ਰਾਜਪੁੱਤਰ", "ਰਾਜ-ਪੁੱਤਰ", "ਰਾਜਪੁਤਰ", "ਰਾਜ ਪੁੱਤਰ"],
                  "answer_en": "ਰਾਜਪੁੱਤਰ",
                  "answer_pa": "ਰਾਜਪੁੱਤਰ"
                },
                {
                  "num": 24,
                  "question_en": "What is the feminine of 'ਮਾਲਕ' (owner)?",
                  "question_pa": "'ਮਾਲਕ' ਦੀ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮਾਲਕਾ", "ਮਾਲਕੀ", "ਮਾਲਕਨ", "ਮਾਲਕਿਆਣੀ"],
                  "options_pa": ["ਮਾਲਕਾ", "ਮਾਲਕੀ", "ਮਾਲਕਨ", "ਮਾਲਕਿਆਣੀ"],
                  "answer_en": "ਮਾਲਕਨ",
                  "answer_pa": "ਮਾਲਕਨ"
                },
                {
                  "num": 25,
                  "question_en": "What is the meaning of 'ਦਿਮਾਗ਼ ਚਲਾਉਣਾ'?",
                  "question_pa": "'ਦਿਮਾਗ਼ ਚਲਾਉਣਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To work hard", "To think deeply", "To be lazy", "To be angry"],
                  "options_pa": ["ਮਿਹਨਤ ਕਰਨੀ", "ਡੂੰਘਾ ਸੋਚਣਾ", "ਆਲਸੀ ਹੋਣਾ", "ਗੁੱਸਾ ਹੋਣਾ"],
                  "answer_en": "To think deeply",
                  "answer_pa": "ਡੂੰਘਾ ਸੋਚਣਾ"
                },
                {
                  "num": 26,
                  "question_en": "Which of these is a 'Bahuvrihi Samas'?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ 'ਬਹੁਵ੍ਰੀਹੀ ਸਮਾਸ' ਹੈ?",
                  "options_en": ["ਰਾਜ-ਪਾਟ", "ਚੰਦਰਮੁਖੀ", "ਗੰਗਾ-ਜਲ", "ਵਿਦਿਆਰਥੀ"],
                  "options_pa": ["ਰਾਜ-ਪਾਟ", "ਚੰਦਰਮੁਖੀ", "ਗੰਗਾ-ਜਲ", "ਵਿਦਿਆਰਥੀ"],
                  "answer_en": "ਚੰਦਰਮੁਖੀ",
                  "answer_pa": "ਚੰਦਰਮੁਖੀ"
                },
                {
                  "num": 27,
                  "question_en": "Who is the protagonist of 'Heer Ranjha'?",
                  "question_pa": "'ਹੀਰ ਰਾਂਝਾ' ਦਾ ਮੁੱਖ ਪਾਤਰ ਕੌਣ ਹੈ?",
                  "options_en": ["Heer", "Ranjha", "Both", "Kaido"],
                  "options_pa": ["ਹੀਰ", "ਰਾਂਝਾ", "ਦੋਵੇਂ", "ਕਾਇਦੋ"],
                  "answer_en": "Both",
                  "answer_pa": "ਦੋਵੇਂ"
                },
                {
                  "num": 28,
                  "question_en": "What is the meaning of 'ਰੂਪਕ ਅਲੰਕਾਰ'?",
                  "question_pa": "'ਰੂਪਕ ਅਲੰਕਾਰ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                  "options_pa": ["ਉਪਮਾ", "ਰੂਪਕ", "ਮਨੁੱਖੀਕਰਣ", "ਅਤਿਸ਼ਯੋਕਤੀ"],
                  "answer_en": "Metaphor",
                  "answer_pa": "ਰੂਪਕ"
                },
                {
                  "num": 29,
                  "question_en": "Which poet wrote 'Main tenu phir milangi'?",
                  "question_pa": "'ਮੈਂ ਤੈਨੂੰ ਫਿਰ ਮਿਲਾਂਗੀ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Amrita Pritam", "Pash", "Surjit Patar", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 30,
                  "question_en": "What is the correct 'Karan Karak' in the sentence 'ਰਾਮ ਨੇ ਫਲ ਖਾਧੇ'?",
                  "question_pa": "ਵਾਕ 'ਰਾਮ ਨੇ ਫਲ ਖਾਧੇ' ਵਿੱਚ 'ਕਰਨ ਕਾਰਕ' ਕੀ ਹੈ?",
                  "options_en": ["ਰਾਮ", "ਨੇ", "ਫਲ", "ਖਾਧੇ"],
                  "options_pa": ["ਰਾਮ", "ਨੇ", "ਫਲ", "ਖਾਧੇ"],
                  "answer_en": "ਫਲ",
                  "answer_pa": "ਫਲ"
                },
                {
                  "num": 31,
                  "question_en": "Which river is NOT in Punjab?",
                  "question_pa": "ਕਿਹੜੀ ਨਦੀ ਪੰਜਾਬ ਵਿੱਚ ਨਹੀਂ ਹੈ?",
                  "options_en": ["Yamuna", "Beas", "Chenab", "Ravi"],
                  "options_pa": ["ਯਮੁਨਾ", "ਬਿਆਸ", "ਚਨਾਬ", "ਰਾਵੀ"],
                  "answer_en": "Yamuna",
                  "answer_pa": "ਯਮੁਨਾ"
                },
                {
                  "num": 32,
                  "question_en": "What is the moral of 'Baba Farid's' stories?",
                  "question_pa": "ਬਾਬਾ ਫ਼ਰੀਦ ਦੀਆਂ ਕਹਾਣੀਆਂ ਦੀ ਸਿੱਖਿਆ ਕੀ ਹੈ?",
                  "options_en": ["Wealth brings happiness", "Truth and simplicity", "Power is everything", "Deceit is necessary"],
                  "options_pa": ["ਧਨ ਖੁਸ਼ੀ ਲੈ ਕੇ ਆਉਂਦਾ ਹੈ", "ਸੱਚਾਈ ਅਤੇ ਸਾਦਗੀ", "ਤਾਕਤ ਸਭ ਕੁਝ ਹੈ", "ਧੋਖਾ ਜ਼ਰੂਰੀ ਹੈ"],
                  "answer_en": "Truth and simplicity",
                  "answer_pa": "ਸੱਚਾਈ ਅਤੇ ਸਾਦਗੀ"
                },
                {
                  "num": 33,
                  "question_en": "Which is a 'Kridant Samas'?",
                  "question_pa": "ਕਿਹੜਾ 'ਕ੍ਰਿਦੰਤ ਸਮਾਸ' ਹੈ?",
                  "options_en": ["ਪੜ੍ਹਾਈ", "ਵਿਦਿਆਰਥੀ", "ਚੰਗਾ-ਮੰਦਾ", "ਰਾਜ-ਪਾਟ"],
                  "options_pa": ["ਪੜ੍ਹਾਈ", "ਵਿਦਿਆਰਥੀ", "ਚੰਗਾ-ਮੰਦਾ", "ਰਾਜ-ਪਾਟ"],
                  "answer_en": "ਪੜ੍ਹਾਈ",
                  "answer_pa": "ਪੜ੍ਹਾਈ"
                },
                {
                  "num": 34,
                  "question_en": "Who wrote 'Sunehray'?",
                  "question_pa": "'ਸੁਨੇਹੜੇ' ਕਿਸ ਨੇ ਲਿਖੇ?",
                  "options_en": ["Gurbaksh Singh Preetlari", "Nanak Singh", "Bhai Vir Singh", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ", "ਨਾਨਕ ਸਿੰਘ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Gurbaksh Singh Preetlari",
                  "answer_pa": "ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ"
                },
                {
                  "num": 35,
                  "question_en": "What is the feminine of 'ਮੁੰਡਾ' (boy)?",
                  "question_pa": "'ਮੁੰਡਾ' ਦੀ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਭੈਣ"],
                  "options_pa": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਭੈਣ"],
                  "answer_en": "ਮੁੰਡੀ",
                  "answer_pa": "ਮੁੰਡੀ"
                },
                {
                  "num": 36,
                  "question_en": "Which figure of speech is in 'ਮੋਰ ਨੱਚਿਆ'?",
                  "question_pa": "'ਮੋਰ ਨੱਚਿਆ' ਵਿੱਚ ਕਿਹੜਾ ਅਲੰਕਾਰ ਹੈ?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                  "options_pa": ["ਉਪਮਾ", "ਰੂਪਕ", "ਮਨੁੱਖੀਕਰਣ", "ਅਤਿਸ਼ਯੋਕਤੀ"],
                  "answer_en": "Personification",
                  "answer_pa": "ਮਨੁੱਖੀਕਰਣ"
                },
                {
                  "num": 37,
                  "question_en": "What is the meaning of 'ਦਿਲ ਫੱਟਣਾ'?",
                  "question_pa": "'ਦਿਲ ਫੱਟਣਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To be happy", "To be heartbroken", "To be angry", "To be jealous"],
                  "options_pa": ["ਖੁਸ਼ ਹੋਣਾ", "ਦਿਲ ਟੁੱਟਣਾ", "ਗੁੱਸਾ ਹੋਣਾ", "ਈਰਖਾ ਕਰਨੀ"],
                  "answer_en": "To be heartbroken",
                  "answer_pa": "ਦਿਲ ਟੁੱਟਣਾ"
                },
                {
                  "num": 38,
                  "question_en": "Which is the correct 'Muhavara' for 'to work hard'?",
                  "question_pa": "'ਮਿਹਨਤ ਕਰਨੀ' ਲਈ ਸਹੀ ਮੁਹਾਵਰਾ ਕਿਹੜਾ ਹੈ?",
                  "options_en": ["ਹੱਥ ਪੈਰ ਮਾਰਨਾ", "ਪਸੀਨਾ ਵਹਾਉਣਾ", "ਦਿਮਾਗ਼ ਚਲਾਉਣਾ", "ਅੱਖਾਂ ਚਰਾਉਣਾ"],
                  "options_pa": ["ਹੱਥ ਪੈਰ ਮਾਰਨਾ", "ਪਸੀਨਾ ਵਹਾਉਣਾ", "ਦਿਮਾਗ਼ ਚਲਾਉਣਾ", "ਅੱਖਾਂ ਚਰਾਉਣਾ"],
                  "answer_en": "ਪਸੀਨਾ ਵਹਾਉਣਾ",
                  "answer_pa": "ਪਸੀਨਾ ਵਹਾਉਣਾ"
                },
                {
                  "num": 39,
                  "question_en": "What is the plural of 'ਪੱਤਰ' (letter)?",
                  "question_pa": "'ਪੱਤਰ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪੱਤਰਾਂ", "ਪੱਤਰੇ", "ਪੱਤਰੀ", "ਪੱਤਰੋਂ"],
                  "options_pa": ["ਪੱਤਰਾਂ", "ਪੱਤਰੇ", "ਪੱਤਰੀ", "ਪੱਤਰੋਂ"],
                  "answer_en": "ਪੱਤਰਾਂ",
                  "answer_pa": "ਪੱਤਰਾਂ"
                },
                {
                  "num": 40,
                  "question_en": "Who is the author of 'Loona'?",
                  "question_pa": "'ਲੂਣਾ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Pash", "Bhai Vir Singh"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਪਾਸ਼", "ਭਾਈ ਵੀਰ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 41,
                  "question_en": "Which is an example of 'Upma Alankar'?",
                  "question_pa": "'ਉਪਮਾ ਅਲੰਕਾਰ' ਦੀ ਉਦਾਹਰਣ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["ਚੰਦਾ ਮੁਸਕਰਾਇਆ", "ਪਹਾੜ ਜਿਹਾ ਦੇਹ", "ਮੋਰ ਨੱਚਿਆ", "ਗੱਡੀ ਦੌੜੀ"],
                  "options_pa": ["ਚੰਦਾ ਮੁਸਕਰਾਇਆ", "ਪਹਾੜ ਜਿਹਾ ਦੇਹ", "ਮੋਰ ਨੱਚਿਆ", "ਗੱਡੀ ਦੌੜੀ"],
                  "answer_en": "ਪਹਾੜ ਜਿਹਾ ਦੇਹ",
                  "answer_pa": "ਪਹਾੜ ਜਿਹਾ ਦੇਹ"
                },
                {
                  "num": 42,
                  "question_en": "What is the masculine of 'ਗਾਈ' (cow)?",
                  "question_pa": "'ਗਾਈ' ਦਾ ਪੁਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਬੱਕਰਾ", "ਬਲਦ", "ਗਾਂ", "ਭੈਂਸਾ"],
                  "options_pa": ["ਬੱਕਰਾ", "ਬਲਦ", "ਗਾਂ", "ਭੈਂਸਾ"],
                  "answer_en": "ਬਲਦ",
                  "answer_pa": "ਬਲਦ"
                },
                {
                  "num": 43,
                  "question_en": "Which poet is associated with 'Naxalite Movement'?",
                  "question_pa": "ਕਿਹੜਾ ਕਵੀ 'ਨਕਸਲੀ ਲਹਿਰ' ਨਾਲ ਜੁੜਿਆ ਹੈ?",
                  "options_en": ["Amrita Pritam", "Pash", "Shiv Kumar Batalvi", "Bhai Vir Singh"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਭਾਈ ਵੀਰ ਸਿੰਘ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 44,
                  "question_en": "What is the meaning of 'ਕਰਮ ਕਾਰਕ'?",
                  "question_pa": "'ਕਰਮ ਕਾਰਕ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["Subject of action", "Object of action", "Instrument of action", "Location of action"],
                  "options_pa": ["ਕਰਤਾ", "ਕਰਮ", "ਕਰਣ", "ਅਧਿਕਰਣ"],
                  "answer_en": "Object of action",
                  "answer_pa": "ਕਰਮ"
                },
                {
                  "num": 45,
                  "question_en": "Which is the correct 'Samas' for 'ਰਾਜਾ ਦਾ ਪੁੱਤਰ'?",
                  "question_pa": "'ਰਾਜਾ ਦਾ ਪੁੱਤਰ' ਲਈ ਸਹੀ ਸਮਾਸ ਕਿਹੜਾ ਹੈ?",
                  "options_en": ["ਰਾਜਪੁੱਤਰ", "ਰਾਜ-ਪੁੱਤਰ", "ਰਾਜਪੁਤਰ", "ਰਾਜ ਪੁੱਤਰ"],
                  "options_pa": ["ਰਾਜਪੁੱਤਰ", "ਰਾਜ-ਪੁੱਤਰ", "ਰਾਜਪੁਤਰ", "ਰਾਜ ਪੁੱਤਰ"],
                  "answer_en": "ਰਾਜਪੁੱਤਰ",
                  "answer_pa": "ਰਾਜਪੁੱਤਰ"
                },
                {
                  "num": 46,
                  "question_en": "Who wrote 'Jangal di Rani'?",
                  "question_pa": "'ਜੰਗਲ ਦੀ ਰਾਣੀ' ਕਿਸ ਨੇ ਲਿਖੀ?",
                  "options_en": ["Amrita Pritam", "Mohinder Singh Sarna", "Dalip Kaur Tiwana", "Nanak Singh"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਮੋਹਿੰਦਰ ਸਿੰਘ ਸਰਨਾ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ", "ਨਾਨਕ ਸਿੰਘ"],
                  "answer_en": "Mohinder Singh Sarna",
                  "answer_pa": "ਮੋਹਿੰਦਰ ਸਿੰਘ ਸਰਨਾ"
                },
                {
                  "num": 47,
                  "question_en": "What is the feminine of 'ਮਾਲਕ' (owner)?",
                  "question_pa": "'ਮਾਲਕ' ਦੀ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮਾਲਕਾ", "ਮਾਲਕੀ", "ਮਾਲਕਨ", "ਮਾਲਕਿਆਣੀ"],
                  "options_pa": ["ਮਾਲਕਾ", "ਮਾਲਕੀ", "ਮਾਲਕਨ", "ਮਾਲਕਿਆਣੀ"],
                  "answer_en": "ਮਾਲਕਨ",
                  "answer_pa": "ਮਾਲਕਨ"
                },
                {
                  "num": 48,
                  "question_en": "Which is a 'Tatpurush Samas'?",
                  "question_pa": "ਕਿਹੜਾ 'ਤਤਪੁਰਖ ਸਮਾਸ' ਹੈ?",
                  "options_en": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "options_pa": ["ਰਾਜ-ਪਾਟ", "ਗੰਗਾ-ਜਲ", "ਚੰਦਰਮੁਖੀ", "ਵਿਦਿਆਰਥੀ"],
                  "answer_en": "ਗੰਗਾ-ਜਲ",
                  "answer_pa": "ਗੰਗਾ-ਜਲ"
                },
                {
                  "num": 49,
                  "question_en": "What is the meaning of 'ਦਿਮਾਗ਼ ਚਲਾਉਣਾ'?",
                  "question_pa": "'ਦਿਮਾਗ਼ ਚਲਾਉਣਾ' ਦਾ ਅਰਥ ਕੀ ਹੈ?",
                  "options_en": ["To work hard", "To think deeply", "To be lazy", "To be angry"],
                  "options_pa": ["ਮਿਹਨਤ ਕਰਨੀ", "ਡੂੰਘਾ ਸੋਚਣਾ", "ਆਲਸੀ ਹੋਣਾ", "ਗੁੱਸਾ ਹੋਣਾ"],
                  "answer_en": "To think deeply",
                  "answer_pa": "ਡੂੰਘਾ ਸੋਚਣਾ"
                },
                {
                  "num": 50,
                  "question_en": "Which poet is known for 'Birha da Sultan'?",
                  "question_pa": "'ਵਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਕਿਸ ਕਵੀ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Amrita Pritam", "Pash", "Shiv Kumar Batalvi", "Bulleh Shah"],
                  "options_pa": ["ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                }
              

];
let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";

optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
});

updateNavigation();
}

function markAttempted(index, selectedAnswer) {
questions[index].attempted = true;
questions[index].selected = selectedAnswer;
updateNavigation();
}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
}
}

function prevQuestion() {
if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
}
}

function changeLanguage() {
language = document.getElementById("languageSelect").value;
loadQuestion(currentQuestion);
}

function submitQuiz() {
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
        if (q.attempted) {
                attempted++;
                if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                        score++;
                }
        } else {
                notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");
timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("Time's up! Submitting the quiz automatically.");
                submitQuiz();
        } else {
                const hours = Math.floor(timeLeft / 3600);
                const minutes = Math.floor((timeLeft % 3600) / 60);
                const seconds = timeLeft % 60;

                // Format as HH:MM:SS with leading zeros
                timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                timeLeft--;
        }
}, 1000);
}
function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
        let color = "gray"; // Default not visited
        if (q.attempted) {
                color = "green"; // Answered
        }
        if (q.selected === "") {
                color = "gray"; // Not answered
        }
        if (index === currentQuestion) {
                color = "blue"; // Current question
        }
        navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};

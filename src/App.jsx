import { useState } from 'react'

const features = [
  { icon: '🍱', title: '메뉴 미리보기 · 반찬 빼기', desc: '이번 주 메뉴를 미리 확인하고, 원하지 않는 반찬은 빼고 받아보세요.' },
  { icon: '📅', title: '배송 요일 변경 · 일시정지', desc: '바쁜 주에는 요일을 바꾸거나 잠시 멈출 수 있어요.' },
  { icon: '🎁', title: '첫 주 50% 할인 체험', desc: '부담 없이 먼저 드셔 보세요. 첫 주는 절반 가격이에요.' },
]

const faqs = [
  { q: '배송은 언제 오나요?', a: '매주 화요일과 금요일 새벽에 문 앞으로 배송해 드려요.' },
  { q: '못 먹는 반찬이 있어도 되나요?', a: '네. 메뉴를 미리 확인하고 원하지 않는 반찬은 뺄 수 있어요.' },
  { q: '바빠서 못 받는 주에는 어떻게 하나요?', a: '배송 요일을 바꾸거나 일시정지를 할 수 있어요.' },
  { q: '첫 주 체험은 어떻게 하나요?', a: '아래 신청 폼에 이름과 이메일을 남기면 첫 주를 50% 할인된 가격으로 체험할 수 있어요.' },
]

const reviews = [
  { name: '김서연 (28세, 마케터)', text: '야근하고 와도 냉장고에 반찬이 있어서 든든해요. 배달비가 확 줄었어요!' },
  { name: '박지훈 (31세, 개발자)', text: '1인분씩 포장돼 있어서 버리는 게 하나도 없어요. 맛도 집밥 같아요.' },
  { name: '이하은 (26세, 디자이너)', text: '싫어하는 반찬을 뺄 수 있어서 좋아요. 일시정지도 간편해요.' },
]

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">🥢 냠냠박스</a>
          <nav>
            <a href="#problem">고민</a>
            <a href="#features">기능</a>
            <a href="#faq">질문</a>
            <a href="#reviews">후기</a>
            <a href="#apply" className="nav-cta">신청</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="badge">퇴근이 늦은 20~30대 직장인을 위한</p>
            <h1>퇴근하면 반찬이<br />문 앞에 있어요</h1>
            <p className="price">하루 <strong>4,900원</strong></p>
            <p className="sub">영양사가 짠 반찬 5종, 주 2회 새벽배송<br />첫 주는 50% 할인</p>
            <div className="cta">
              <a href="#apply" className="btn btn-big">첫 주 체험 신청하기</a>
            </div>
          </div>
        </section>

        <section id="problem" className="section">
          <div className="container">
            <h2>이런 고민, 있으셨죠?</h2>
            <p className="lead">배달음식은 비싸고, 장을 봐도 재료가 남아 버리게 되죠.</p>
            <p className="solution">
              냠냠박스는 <strong>영양사가 짠 반찬 5종</strong>을 <strong>1인분씩 소포장</strong>해
              <strong> 화·금요일 새벽</strong>에 배송해 드려요. 더 이상 고민하지 마세요.
            </p>
          </div>
        </section>

        <section id="features" className="section alt">
          <div className="container">
            <h2>핵심 기능</h2>
            <div className="cards">
              {features.map((f) => (
                <div className="card" key={f.title}>
                  <div className="icon" aria-hidden="true">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container narrow faq">
            <h2>자주 묻는 질문</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="reviews" className="section alt">
          <div className="container">
            <h2>고객 후기 (예시)</h2>
            <div className="cards">
              {reviews.map((r) => (
                <div className="card review" key={r.name}>
                  <p>“{r.text}”</p>
                  <span>{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="section">
          <div className="container narrow">
            <h2>첫 주 50% 할인 체험</h2>
            {done ? (
              <p className="success">신청이 접수되었습니다</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>
                  이름
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" />
                </label>
                <label>
                  이메일
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
                </label>
                <button type="submit" className="btn">첫 주 체험 신청하기</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <strong>냠냠박스</strong>
          <p>1인 가구를 위한 주 2회 반찬 정기배송</p>
          <p>© 2026 냠냠박스. 본 페이지는 예시 랜딩 페이지입니다.</p>
        </div>
      </footer>
    </>
  )
}

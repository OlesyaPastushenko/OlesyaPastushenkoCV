import "./secAbout.css"


export function SectionAbout() {

    const onDownloadPdf = () =>{
        fetch('Junior_react_developer.pdf')
        .then(res=>{
            res.blob()
            .then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Junior_react_developer.pdf";
                alink.click()
            })
        })
    }

    const onDownloadDoc = () =>{
        fetch('Junior_react_developer.docx')
        .then(res=>{
            res.blob()
            .then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Junior_react_developer.docx";
                alink.click()
            })
        })
    }

  return (
        <section className='about'>
        <div className='containerAbout'>
          <div className='title'>
            <p>About</p>
            <p>Me</p>
          </div>
          
          <div className='textAbout'>
          I usually take initiative to start and complete tasks without being prompted, continuously seek opportunities for self-improvement and learning. I would like to work in a large friendly company that is engaged in interesting projects.
            <div className='btns'>
            <button onClick={onDownloadDoc} className='blackBtn'>Download CV .doc</button>
            <button onClick={onDownloadPdf} className='whiteBtn'>Download CV .pdf</button>
            </div>
          </div>
        </div>
        </section>
  );
}
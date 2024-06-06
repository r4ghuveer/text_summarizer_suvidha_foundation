const SummarizerManager  =  require("node-summarizer").SummarizerManager;
exports.gethome = (req,res,next) =>{
    res.render('home',{
        summary : ''
    })
    next()
}

function whichType(req){
    let getSelectedValue = req.body.type
    if(getSelectedValue=='frequency'){
        return 'freq';
    }
    else if(getSelectedValue=='textrank'){
        return 'text';
    }
    else{
        return 'Please select the summarize technique';
    }
}

exports.postSummary = async (req,res,next) => {
    let body = req.body.text;
    let num = req.body.number;
    let type = whichType(req)
    if(type=='freq'){
        let Summarizer = new SummarizerManager(body,num);
        const summary = await Summarizer.getSummaryByFrequency().summary;
        console.log(summary)
        res.render('home',{
            summary : summary
        })
    }
    else if(type=='text'){
        let Summarizer = new SummarizerManager(body,num);
        const summary_object = await Summarizer.getSummaryByRank();
        const summary = summary_object.summary;
        console.log(summary)
        res.render('home',{
            summary : summary
        })
    }
    else{
        res.render('home',{
            summary : type
        })
    }
}

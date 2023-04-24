// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(topic) {
    let maxTopics = 0;
    let maxTeams = 0;
    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let topics = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    topics++;
                }
            }
            if (topics > maxTopics) {
                maxTopics = topics;
                maxTeams = 1;
            } else if (topics === maxTopics) {
                maxTeams++;
            }
        }
    }
    return [maxTopics, maxTeams];
}
